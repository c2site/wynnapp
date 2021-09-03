import {Lottery, LotteryStatus} from "../../imports/api/mongo/lottery";
import {Coin} from "../../imports/api/mongo/coins";
import {Ticket} from "../../imports/api/mongo/ticket";

const keccak256 = require('keccak256')

class Lottery_manage {

    static _waitOldLottery () {
        Lottery.update({status: LotteryStatus.OPEN}, {$set: {status: LotteryStatus.WAIT}}, {multi: true});
    }

    static create() {
        this._waitOldLottery();
        if(Lottery.findOne({status: LotteryStatus.WAIT})) return;

        let count = Lottery.find().count();

        Coin.find().map((coin, index)=> {
            const lottery = new Lottery({
                id: count + index,
                assetName: coin.name,
                start: new Date,
                close: new Date,
            });

            lottery.save();
        })
    }

    static sendWins(lottery) {
        // check 5 matchs
    }

    static _startLottery({numbers, hash}) {
        const lottery = Lottery.findOne({status: LotteryStatus.WAIT});
        lottery.set({
            numbers,
            hash
        });
        lottery.save();
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

class Ticket_manager {
    constructor(userId, assetName) {
        this.userId = userId;
        this.assetName = assetName;
        this.lottery = Lottery.findOne({status: LotteryStatus.OPEN, assetName: assetName});
    }

    _check() {
        if(!this.lottery) return;
    }

    _getPrice(numbersCount) {

    }


    buy ({numbers}) {
        this._check();
        const ticker = new Ticket({
            numbers,
            assetName: this.assetName
        })


    }
}

export default Lottery_manage;