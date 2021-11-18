import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import "meteor/jagi:astronomy-softremove-behavior";

import { Random } from 'meteor/random'

export const Moneys = new Mongo.Collection('moneys');
export const Address = new Mongo.Collection('address');

export const Money = Class.create({
    name: 'money',
    collection: Moneys,
    fields: {
        userId: String,
        amount: {type: Number, default: 0},
        coins: {type: String},
        precision: {type: Number, default: 8},
        type: {type: String, optional: true}
    },
    behaviors: {
        timestamp: {},
        softremove: {}
    },
    helpers: {
        value() {
            return (this.amount / Math.pow(10, this.precision));
        }
    }
});

export const Addr = Class.create({
    name: 'addr',
    collection: Address,
    fields: {
        userId: String,
        address: {type: String},
        privateKey: String
    },
    behaviors: {
        timestamp: {},
        //softremove: {}
    },
})
