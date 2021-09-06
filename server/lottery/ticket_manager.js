import {Lottery, LotteryStatus} from "../../imports/api/mongo/lottery";
import {Price} from "../../imports/api/mongo/price";
import {Ticket} from "../../imports/api/mongo/ticket";
import {Meteor} from "meteor/meteor";
import {Money} from "../../imports/api/mongo/money";
import {Money_manager, Transactions_manager} from "../money/money_manager";
import {TransactionType} from "../../imports/api/mongo/transactions";
import {Coin} from "../../imports/api/mongo/coins";
class Ticket_manager {
    constructor(userId, assetName) {
        this.userId = userId;
        this.assetName = assetName;
        this.user = Meteor.users.findOne(this.userId);
        this.lottery = Lottery.findOne({status: LotteryStatus.OPEN, assetName: assetName});
        this.balance = Money.findOne({userId: this.userId, coins: this.assetName});
        this.asset = Coin.findOne({name: this.assetName})
    }

    _check(ticker) {
        if(!this.lottery) return;
        if(ticker.amount * Math.pow(10, this.balance.precision) > this.balance.amount) throw new Meteor.Error('error.balance', 'Need more balance');
    }

    _getPrice(numbersCount) {
        const price = Price.findOne({assetName: this.assetName});
        const res = price.prices[`price${numbersCount.length}`];
        if(!res) throw new Meteor.Error('error.ticket.numbers', 'Need more numbers');
        return res;
    }

    _send(ticker) {
        const money = new Money_manager(this.userId, this.assetName);
        money.buy({amount: ticker.price});
    }


    buy (numbers) {

        const ticker = new Ticket({
            userId: this.userId,
            user: {name: this.user?.profile?.name || 'Anonymous'},
            id: Ticket.find().count() + 1,
            numbers,
            assetName: this.assetName,
            lottery: this.lottery
        });
        ticker.price = Number(this._getPrice(numbers).toFixed(2));
        this._check(ticker);
        this._send(ticker)
        ticker.save();
    }
}

export default Ticket_manager;