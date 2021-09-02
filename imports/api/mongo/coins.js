import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import "meteor/jagi:astronomy-softremove-behavior";

const Coins = new Mongo.Collection('coins');

export const Coin = Class.create({
    name: 'coin',
    collection: Coins,
    fields: {
        name: String,
        precision: Number,
        asset: String
    }
});