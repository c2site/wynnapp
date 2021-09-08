import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/littledata:synced-cron';

import './tron/cron';
import './price/price';
import './lottery/cron'

Meteor.startup(() => {
    SyncedCron.config({
        // Log job run details to console
        log: Meteor.isProduction,
    });
    if (Meteor.isDevelopment) {
        SyncedCron.start();
    }
});
