import { SyncedCron } from 'meteor/littledata:synced-cron';
import TronNode from "./tron";

SyncedCron.add({
    name: 'Load blocks',
    schedule: (parser) => parser.text('every 1 minutes'),
    async job()  {
        const tron = new TronNode();
        await tron.startLoadTxs();
    },
});