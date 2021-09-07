import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import TwoFA from './2fa_manager';

Meteor.methods({
  'user.enable2fa'() {
    check(this.userId, String);
    return TwoFA.generate2fa(this.userId);
  },
  'user.disable2fa'(token) {
    check(this.userId, String);
    check(token, String);
    return TwoFA.deactivate2fa(this.userId, token);
  },
  'user.confirm2fa'(token) {
    check(this.userId, String);
    check(token, String);
    TwoFA.confirm2fa(this.userId, token);
  }
});
