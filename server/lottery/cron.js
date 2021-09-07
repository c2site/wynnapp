import { SyncedCron } from 'meteor/littledata:synced-cron';
import Lottery_manage from "./lottery_manage";

SyncedCron.add({
    name: 'Create new game',
    schedule: (parser) => parser.cron('0 * * * *'),
    async job()  {
        Lottery_manage.create();
    },
});
