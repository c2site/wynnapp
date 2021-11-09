import { Meteor } from 'meteor/meteor';
import otplib from 'otplib';

class TwoFA {
  generate2fa(userId) {
    const secret = otplib.authenticator.generateSecret();
    console.log(secret);
    Meteor.users.update(userId, { $set: { 'services.twoFactorSecret': secret } });
    return secret;
  }

  check2fa(userId, token) {
    const secret = Meteor.users.findOne({_id: userId}).services.twoFactorSecret;
    console.log(userId , otplib.authenticator.check(token, secret));
    if (!otplib.authenticator.check(token, secret)) {
      throw new Meteor.Error('invalid-token', 'Invalid token');
    }
  }

  confirm2fa(userId, token) {
    this.check2fa(userId, token)
    Meteor.users.update(userId, { $set: { 'settings.twoFa': true } });
  }

  deactivate2fa(userId, token) {
    this.check2fa(userId, token)
    Meteor.users.update(userId, { $set: { 'settings.twoFa': false } });
  }
}

export default new TwoFA();
