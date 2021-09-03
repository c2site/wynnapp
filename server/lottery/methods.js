import {Meteor} from "meteor/meteor";
import {Lottery} from "../../imports/api/mongo/lottery";
import {Ticket, TicketStatus} from "../../imports/api/mongo/ticket";

Meteor.methods({
    'stats.count'() {
        return {
            lottery: Lottery.find().count(),
            users: Meteor.users.find().count(),
            win: Ticket.find({status: TicketStatus.WIN}).count()
        }
    }
})