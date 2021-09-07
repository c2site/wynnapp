import {Lottery, LotteryStatus} from "../../imports/api/mongo/lottery";
import {Coin} from "../../imports/api/mongo/coins";
import {Ticket, Tickets, TicketStatus} from "../../imports/api/mongo/ticket";
import {Price} from "../../imports/api/mongo/price";
import {Addr, Money} from "../../imports/api/mongo/money";
import {Money_manager} from "../money/money_manager";

const keccak256 = require('keccak256')

class Lottery_manage {

    static _toWaitOldLottery () {
        Lottery.update({status: LotteryStatus.OPEN}, {$set: {status: LotteryStatus.WAIT}}, {multi: true});
    }

    static create() {
        this._toWaitOldLottery();
        const now = new Date();
        const close = now.setMinutes(now.getMinutes() + 60)
        //if(Lottery.findOne({status: LotteryStatus.WAIT})) return;

        let count = Lottery.find().count();

        Coin.find().map((coin, index)=> {
            const lottery = new Lottery({
                id: count + index,
                assetName: coin.name,
                //start: new Date(now),
                close: new Date(close),
            });

            lottery.save();
        })
    }

    static _sendMoney(id) {
        const arr = [3,4,5];
        arr.map(count=>{
            const lottery = Lottery.findOne(id);
            const countT = Ticket.find({'lottery._id': id, 'winCount': count}).count();
            if(countT > 0) {
                const tikets = Ticket.find({'lottery._id': id, 'winCount': count})
                const money = Money.findOne({type: 'game', userId: `game_${count}`, coins: lottery.assetName});
                const winAmount = money.amount / countT;
                tikets.map(async(tik)=> {
                    tik.win = Number((winAmount / Math.pow(10, money.precision)).toFixed(money.precision));
                    tik.save();

                    const moneySend = new Money_manager('master', lottery.assetName);
                    const userAddress = Addr.findOne({userId: tik.userId}).address;
                    await moneySend.send({recipient: userAddress, amount: tik.win});
                });

                money.amount = 0;
                money.save();


            }
        })
    }
    static _checkWinNumber(customerNumber, winingNumber) {
        return customerNumber.filter(function(item){
            return winingNumber.indexOf(item) > -1
        }).length;
    }

    static _checkTicket(id) {
        Ticket.find({'lottery._id': id}).map(ticket=>{
            const count = this._checkWinNumber(ticket.lottery.numbers, ticket.numbers);
            if(count >= 3) {
                ticket.winCount = count;
                ticket.status = TicketStatus.WIN;
            } else {
                ticket.status = TicketStatus.LOST;
            }
            ticket.save();
        });

        this._sendMoney(id);


    }

    static _startLottery({numbers, hash}) {
        const lottery = Lottery.findOne({status: LotteryStatus.WAIT});
        //if(!lottery) return;
        lottery.set({
            numbers,
            hash,
            status: LotteryStatus.CANCELED
        });
        Tickets.update({'lottery._id': lottery._id}, {$set: {lottery: {...lottery}}}, {multi: true});
        lottery.save();
        console.log(lottery._id);
        this._checkTicket(lottery._id)
    }

    static hash(hash) {
        let numbersCount = 5;
        let numbersCountMax = 36;

        function getWinNumbers(bitcoinBlockHash,numbersCount,numbersCountMax) {
            const numbersCount1 = numbersCount+5;
            const numbersCountMax1 = numbersCountMax+5;

            const kecc = keccak256(bitcoinBlockHash);
            const kecarr = Array.prototype.slice.call(kecc, 0);

            let allNumbers=winNumbers=[];
            for (let i = 0; i < numbersCountMax1; i++) {
                allNumbers[i] = i + 1;
            }

            let totWin=0;

            var winNumbers=[];
            for (let i = 0; i < numbersCount1; i++) {
                let n = numbersCountMax1 - i;
                var r = (kecarr[i * 3] + (kecarr[i * 3 + 1] << 8) + (kecarr[i * 3 + 2] << 16) + (kecarr[i * 3 + 3] * 16777216)) % n;
                if(allNumbers[r]<(numbersCountMax+1)) {
                    winNumbers.push(allNumbers[r]);
                    allNumbers[r]=allNumbers[n-1];
                    totWin++;
                    if(totWin==numbersCount) {
                        break;
                    }
                }
            }
            return (winNumbers);
        }

        this._startLottery({numbers: getWinNumbers(hash, numbersCount, numbersCountMax), hash: hash});
    }
}


export default Lottery_manage;