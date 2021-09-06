Meteor.publish('user.data', function () {
    if (!this.userId) this.ready();
    return Meteor.users.find({_id: this.userId}, {fields: {emails: 1, profile: 1, rating: 1, settings: 1}});
})