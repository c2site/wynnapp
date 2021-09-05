import {Money} from "../../imports/api/mongo/money";


Meteor.publish('money.game', function () {
    return Money.find({type: 'game'});
});

Meteor.publish('user.money', function () {
    if (!this.userId) this.ready();
    return Money.find({userId: this.userId})
})