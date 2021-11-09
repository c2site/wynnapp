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
    'buy': async function(numbers, asset) {
        check(numbers, [Number])
        check(asset, String);
        try {
            const lottery = new Ticket_manager(this.userId, asset);
            await lottery.buy(numbers);
        } catch(e) {
            throw new Meteor.Error('error', e.reason);
        }
    }
})