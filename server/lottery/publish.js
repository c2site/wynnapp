import {Lottery, LotteryStatus} from "../../imports/api/mongo/lottery";

Meteor.publish('lottery', function () {
    return Lottery.find({status: LotteryStatus.OPEN});
})
