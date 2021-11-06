import {Accounts} from "meteor/accounts-base";
import {Meteor} from "meteor/meteor";
import settings from "../settings";

Accounts.urls.resetPassword = (token) => Meteor.absoluteUrl(`recoveryPassword/${token}`);
Accounts.urls.verifyEmail = (token) => Meteor.absoluteUrl(`verifyEmail/${token}`);

process.env.MAIL_FROM = settings('emails.from');
process.env.MAIL_URL = settings('emails.smtps');
Accounts.emailTemplates.siteName = settings('name');
Accounts.emailTemplates.from = settings('emails.from');