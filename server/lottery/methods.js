import {Meteor} from "meteor/meteor";
import {Lottery} from "../../imports/api/mongo/lottery";
import {Ticket, TicketStatus} from "../../imports/api/mongo/ticket";
import Ticket_manager from "./ticket_manager";

Meteor.methods({
    'stats.count'() {
        return {
            lottery: Lottery.find().count(),
            users: Meteor.users.find().count(),
            win: Ticket.find({status: TicketStatus.WIN}).count()
        }
    },
    'buy'(numbers) {
        check(numbers, [Number])
        const lottery = new Ticket_manager('master1', 'xxp');
        lottery.buy(numbers);
    }
})