import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import "meteor/jagi:astronomy-softremove-behavior";

export const Tickets = new Mongo.Collection('tickets');
export const TicketStatus = Enum.create({
    name: 'ticket.satus',
    identifiers: {
        WAIT: 'wait',
        WIN: 'win',
        LOST: 'lost'
    }
})
export const Ticket = Class.create({
    name: 'ticket',
    collection: Tickets,
    fields: {
        userId: String,
        name: {type: String, optional: true},
        user: {type: Object, optional: true},
        id: Number,
        numbers: [Number],
        status: {type: TicketStatus, default: TicketStatus.WAIT},
        price: Number,
        assetName: String,
        lottery: Object,
        win: {type: Number, optional: true},
        winCount: {type: Number, optional: true}
    },
    behaviors: {
        timestamp: {},
        softremove: {}
    }
})