import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import "meteor/jagi:astronomy-softremove-behavior";

import { Random } from 'meteor/random'
import {MoneyCoins} from "./money";

export const Transactions = new Mongo.Collection('transaction');

export const TransactionType = Enum.create({
    name: 'transaction.type',
    identifiers: {
        BUY: 'buy',
        WIN: 'win',
        SEND: 'send'
    }
})

export const Transaction = Class.create({
    name: 'transaction',
    collection: Transactions,
    fields: {
        userId: String,
        amount: {type: Number, default: 0},
        sender: String,
        recipient: String,
        precision: {type: Number, default: 8},
        type: TransactionType,
        coin: MoneyCoins
    },
    behaviors: {
        timestamp: {},
        softremove: {}
    },
    helpers: {
        value() {
            return (this.amount / Math.pow(10, this.precision)).toFixed(this.precision);
        }
    }
});


