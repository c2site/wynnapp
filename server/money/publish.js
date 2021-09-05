import {Addr, Money} from "../../imports/api/mongo/money";
import {Transaction} from "../../imports/api/mongo/transactions";
import {Coin} from "../../imports/api/mongo/coins";


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
});

Meteor.publish('coin', function () {
    return Coin.find();
});

Meteor.publish('user.transactions', function () {
    if (!this.userId) this.ready();
    const address = Addr.findOne({userId: this.userId})?.address;
    console.log(address);
    return Transaction.find({"$or": [
            {recipient: address},
            {sender: address}
        ]}, {sort: {createdAt: -1}, limit: 5});
})