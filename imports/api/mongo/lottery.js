import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import "meteor/jagi:astronomy-softremove-behavior";

export const Lotterys = new Mongo.Collection('lotterys');

export const LotteryStatus = Enum.create({
    name:'lottery.status',
    identifiers: {
        OPEN: 'open',
        CLOSED: 'closed',
        WAIT: 'wait',
        CANCELED: 'canceled'
    }
})

export const Lottery = Class.create({
    name: 'lottery',
    collection: Lotterys,
    fields: {
        id: Number,
        status: {type: LotteryStatus, default: LotteryStatus.OPEN},
        tickets: {type: Number, default: 0},
        assetName: String,
        //start: Date,
        close: Date,
        hash: {type: String, optional: true},
        numbers: {type: [Number], optional: true},
        win: {type: Number, optional: true}
    },
    behaviors: {
        timestamp: {},
        softremove: {}
    }
});
