import { Meteor } from 'meteor/meteor';
import './money/init';


import './api';
import TronNode from "./tron/tron";

// tron


Meteor.startup(async () => {
    const tron = new TronNode();
    await tron.startLoadTxs();
});
