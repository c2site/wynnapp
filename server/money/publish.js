import {Addr, Money} from "../../imports/api/mongo/money";


Meteor.publish('money.game', function () {
    return Money.find({type: 'game'});
});

Meteor.publish('user.money', function () {
    if (!this.userId) this.ready();
    return Money.find({userId: this.userId})
})

Meteor.publish('user.addr', function () {
    if (!this.userId) this.ready();
    return Addr.find({userId: this.userId}, {fields: {userId: 1, address: 1}});
})