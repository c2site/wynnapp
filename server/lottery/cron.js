import { SyncedCron } from 'meteor/littledata:synced-cron';
import Lottery_manage from "./lottery_manage";

SyncedCron.add({
    name: 'Create new game',
    schedule: (parser) => parser.text('every 5 minutes'),
    async job()  {
        Lottery_manage.create();
    },
});
