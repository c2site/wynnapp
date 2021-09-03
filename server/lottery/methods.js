import {Meteor} from "meteor/meteor";
import {Lottery} from "../../imports/api/mongo/lottery";

Meteor.methods({
    'stats.count'() {
        return {
            lottery: Lottery.find().count(),
            users: Meteor.users.find().count(),
            win: 100
        }
    }
})