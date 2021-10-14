import {Lottery, LotteryStatus} from "../../imports/api/mongo/lottery";
import {Ticket, TicketStatus} from "../../imports/api/mongo/ticket";
import {check} from "meteor/check";

Meteor.publish('lottery', function () {
    return Lottery.find({status: {$in: [LotteryStatus.OPEN, LotteryStatus.WAIT]}});
})


Meteor.publish('lottery.history', function () {
    return Lottery.find({status: LotteryStatus.CANCELED, numbers: {$exists: true}}, {limit: 50, sort: {id: -1}});
})

Meteor.publish('lottery.tickets', function () {
    return Ticket.find({status: TicketStatus.WIN},{sort: {createdAt: -1}, limit: 25});
});

Meteor.publish('lottery.all', function (skip) {
    check(skip, Number);
    return Ticket.find({},{sort: {createdAt: -1}, limit: skip});
})

Meteor.publish('lottery.user', function () {
    if (!this.userId) this.ready();
    return Ticket.find({userId: this.userId},{sort: {createdAt: -1}});
})