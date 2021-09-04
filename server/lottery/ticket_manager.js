import {Lottery, LotteryStatus} from "../../imports/api/mongo/lottery";
import {Price} from "../../imports/api/mongo/price";
import {Ticket} from "../../imports/api/mongo/ticket";
import {Meteor} from "meteor/meteor";
class Ticket_manager {
    constructor(userId, assetName) {
        this.userId = userId;
        this.assetName = assetName;
        //this.user = Meteor.users.findOne(this.userId);
        this.lottery = Lottery.findOne({status: LotteryStatus.OPEN, assetName: assetName});
    }

    _check() {
        if(!this.lottery) return;
    }

    _getPrice(numbersCount) {
        const price = Price.findOne({assetName: this.assetName});
        const res = price.prices[`price${numbersCount.length}`];
        if(!res) throw new Meteor.Error('error.ticket.numbers', 'Need more numbers');
        return res;
    }


    buy (numbers) {
        this._check();
        const ticker = new Ticket({
            userId: this.userId,
            //user: {name: this.user.profile.name},
            id: Ticket.find().count() + 1,
            numbers,
            assetName: this.assetName,
            lottery: this.lottery
        });
        ticker.price = this._getPrice(numbers);
        ticker.save();
    }
}

export default Ticket_manager;