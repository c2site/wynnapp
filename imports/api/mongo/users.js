import { Class, Enum } from 'meteor/jagi:astronomy';
import 'meteor/jagi:astronomy-softremove-behavior';
import { Random } from 'meteor/random';

export function isAdmin() {
  return Roles.userIsInRole(Meteor.userId(), ['admin']);
}

const MeteorEmail = Class.create({
  name: 'meteor.email',
  fields: {
    address: String,
    verified: Boolean,
  },
});

export const Ref = Class.create({
  name: 'user.settings.ref',
  fields: {
    invite: { type: String, optional: true },
    code: { type: String, default: () => Random.id(8) },
    used: { type: [String], default: () => [] },
  }
});

export const UserSettings = Class.create({
  name: 'user.settings',
  fields: {
    twoFa: { type: Boolean, default: false },
    template: { type: String, optional: true },
    ref: { type: Ref, default: () => new Ref() }
  }
});

export const User = Class.create({
  name: 'user',
  collection: Meteor.users,
  fields: {
    emails: {
      type: [MeteorEmail],
    },
    services: {
      type: Object,
    },
    profile: {
      type: Object,
      optional: true,
    },
    settings: {
      type: UserSettings,
      default: () => new UserSettings(),
    },
  },
  behaviors: {
    timestamp: {},
    softremove: {},
  }
});

Meteor.user = () => User.findOne(Accounts.userId());