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
        this.user = Meteor.users.findOne({_id: this.userId});
        this.lottery = Lottery.findOne({status: LotteryStatus.OPEN, assetName: assetName});
        this.balance = Money.findOne({userId: this.userId, coins: this.assetName});
        this.trx = Money.findOne({userId: this.userId, coins: 'trx'})
        this.asset = Coin.findOne({name: this.assetName})
    }

    async _check(ticker) {
        if(this.trx.amount < 5 * Math.pow(10, this.trx.precision))
        if(!this.lottery) throw new Meteor.Error('error.lottery', 'notification.balance');
        if((ticker.price * Math.pow(10, this.balance.precision)) > this.balance.amount) throw new Meteor.Error('error.balance', 'notification.balance');
    }

    _getPrice(numbersCount) {
        const price = Price.findOne({assetName: this.assetName});
        const res = price.prices[`price${numbersCount.length}`];
        if(!res) throw new Meteor.Error('error.ticket.numbers', 'notification.numbers');
        return res;
    }

    async _send(ticker) {
        const money = new Money_manager(this.userId, this.assetName);
        await money.buy({amount: ticker.price});
    }

    _fee(rating) {
        switch (rating) {
            case rating > 1000:
                return 0.01;
                break;
            case rating > 2000:
                return 0.03;
                break;
            case rating > 5000:
                return 0.07;
                break;
            case rating > 4000:
                return 0.1;
                break;
            case rating > 10000:
                return 0.15;
                break;
            case rating > 1500:
                return 0.19;
                break;
            default:
                return 0;
                break;
        }
    }

    async _addedRating(ticket) {
        const prams = {
            rating: this.user?.rating?.rating || 0,
            fee: this.user?.rating?.fee || 0
        }

        if(this.assetName === 'wynn') {
            prams.rating += ticket.price;
            prams.fee = this._fee(prams.rating);
        }

        if(this.assetName === 'trx') {
            prams.rating += ticket.price / 2;
            prams.fee = this._fee(prams.rating);
        }


        // console.log(prams)
        Meteor.users.update(this.userId, {$set: {rating: prams}})
        //throw new Meteor.Error('error.rating', 'Error rating fee');
    }

    async buy (numbers) {
        const lottery = Lottery.findOne({status: LotteryStatus.WAIT});
        if(lottery) throw new Meteor.Error('find.game', 'notification.blocks');
        const ticker = {
            userId: this.userId,
            user: {name: this.user?.profile?.name || this.balance.address},
            id: Ticket.find().count() + 1,
            numbers,
            assetName: this.assetName,
            lottery: this.lottery
        };


        ticker.price = Number(this._getPrice(numbers).toFixed(2));
        await this._check(ticker);
        await this._addedRating(ticker);

        await this._send(ticker);

        const tickets = new Ticket(ticker);
        tickets.save();
    }
}

export default Ticket_manager;