import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import "meteor/jagi:astronomy-softremove-behavior";

import { Random } from 'meteor/random'

export const Moneys = new Mongo.Collection('moneys');
export const Address = new Mongo.Collection('address');

export const MoneyCoins = Enum.create({
    name: 'money.coins',
    identifiers: {
        WYNNE: 'wynne',
        TRX: 'trx',
        //XXP: 'xxp',
        //USDT: 'usdt'
    }
})

export const Money = Class.create({
    name: 'money',
    collection: Moneys,
    fields: {
        userId: String,
        amount: {type: Number, default: 0},
        coins: {type: MoneyCoins, default: MoneyCoins.WYNNE},
        precision: {type: Number, default: 8},
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

export const Addr = Class.create({
    name: 'addr',
    collection: Address,
    fields: {
        userId: String,
        address: {type: String, default: Random.id(32)}
    },
    behaviors: {
        timestamp: {},
        //softremove: {}
    },
})
