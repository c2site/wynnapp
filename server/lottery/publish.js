import {Lottery, LotteryStatus} from "../../imports/api/mongo/lottery";
import {Ticket, TicketStatus} from "../../imports/api/mongo/ticket";

Meteor.publish('lottery', function () {
    return Lottery.find({status: LotteryStatus.OPEN});
})

Meteor.publish('lottery.tickets', function () {
    return Ticket.find({status: TicketStatus.WIN},{sort: {createdAt: -1}, limit: 25});
});

Meteor.publish('lottery.all', function () {
    return Ticket.find({},{sort: {createdAt: -1}, limit: 25});
})

Meteor.publish('lottery.user', function () {
    if (!this.userId) this.ready();
    return Ticket.find({userId: this.userId},{sort: {createdAt: -1}});
})