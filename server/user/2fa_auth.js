import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import otplib from 'otplib';

// Invalidate password login attempt, if 2FA is enabled
Accounts.validateLoginAttempt(info =>
  info.allowed && !(info.type === 'password' && info.user?.settings?.twoFa));

const handleError = () => {
  throw new Meteor.Error(403, 'Something went wrong. Please check your credentials.');
};

Accounts.registerLoginHandler('two-factor', (options) => {
  if (!options.twoFactorPassword) { return undefined; }

  check(options.user.email, String);
  check(options.twoFactorPassword, {
    digest: String,
    algorithm: String,
  });
  check(options.twoFactorToken, Match.Maybe(String));

  const user = Accounts.findUserByEmail(options.user.email);
  if (!user) handleError();

  if (!user.services || !user.services.password || !user.services.password.bcrypt) {
    return handleError();
  }

  if (Accounts._checkPassword(user, options.twoFactorPassword).error) {
    return handleError();
  }

  if (user.settings?.twoFa) {
    if (typeof options.twoFactorToken !== 'string') {
      throw new Meteor.Error('two-factor-required');
    }
    if (!otplib.authenticator.check(options.twoFactorToken, user.services.twoFactorSecret)) {
      return handleError();
    }
  }

  return { userId: user._id };
});

