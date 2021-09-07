import { Accounts } from 'meteor/accounts-base';
import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import otplib from 'otplib';
import { NpmModuleBcrypt } from 'meteor/npm-bcrypt';

const bcrypt = NpmModuleBcrypt;
const bcryptHash = Meteor.wrapAsync(bcrypt.hash);

const hashPassword = password => bcryptHash(password, Accounts._bcryptRounds());

const handleError = () => {
  throw new Meteor.Error(403, 'Something went wrong. Please check your credentials.');
};

Accounts.registerLoginHandler('two-factor-reset', function (options) {
  if (!options.twoFactorReset) {
    return undefined;
  }

  check(options.user.token, String);
  check(options.twoFactorReset, {
    digest: String,
    algorithm: String,
  });
  check(options.twoFactorToken, Match.Maybe(String));

  const user = Meteor.users.findOne(
    { 'services.password.reset.token': options.user.token },
    {
      fields: {
        settings: 1,
        services: 1,
        emails: 1,
      }
    }
  );
  if (!user) {
    handleError();
  }

  if (user.settings?.twoFa) {
    if (typeof options.twoFactorToken !== 'string') {
      throw new Meteor.Error('two-factor-required');
    }
    if (!otplib.authenticator.check(options.twoFactorToken, user.services.twoFactorSecret)) {
      return handleError();
    }
  }

  const { when, email } = user.services.password.reset;
  const tokenLifetimeMs = Accounts._getPasswordResetTokenLifetimeMs();
  const currentTimeMs = Date.now();
  if ((currentTimeMs - when) > tokenLifetimeMs) {
    return handleError();
  }

  if (!(user.emails.map(x => x.address).includes(email))) {
    return {
      userId: user._id,
      error: new Meteor.Error(403, 'Token has invalid email address')
    };
  }

  const hashed = hashPassword(options.twoFactorReset.digest);

  const oldToken = Accounts._getLoginToken(this.connection.id);
  Accounts._setLoginToken(user._id, this.connection, null);
  const resetToOldToken = () => Accounts._setLoginToken(user._id, this.connection, oldToken);

  try {
    const affectedRecords = Meteor.users.update({
        _id: user._id,
        'emails.address': email,
        'services.password.reset.token': options.user.token
      }, {
        $set: { 'services.password.bcrypt': hashed, 'emails.$.verified': true },
        $unset: { 'services.password.reset': 1, 'services.password.srp': 1 }
      }
    );
    if (affectedRecords !== 1)
      return {
        userId: user._id,
        error: new Meteor.Error(403, 'Invalid email')
      };
  } catch (err) {
    resetToOldToken();
    throw err;
  }

  Accounts._clearAllLoginTokens(user._id);

  return { userId: user._id };
});
