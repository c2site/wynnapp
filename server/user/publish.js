import {Meteor} from "meteor/meteor";

Meteor.publish('user.data', function () {
    if (!this.userId) this.ready();
    return Meteor.users.find({_id: this.userId}, {fields: {emails: 1, profile: 1, rating: 1, settings: 1}});
})

Meteor.publish('user.invite', function () {
    if (!this.userId) this.ready();
    const user = Meteor.users.findOne(this.userId);
    return Meteor.users.find({'settings.ref.invite': user.settings.ref.code}, {fields: {emails: 1, profile: 1, rating: 1, settings: 1}});
})