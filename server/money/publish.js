import {Money} from "../../imports/api/mongo/money";


Meteor.publish('money.game', function () {
    return Money.find({type: 'game'});
})