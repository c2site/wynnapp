import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import "meteor/jagi:astronomy-softremove-behavior";

const Prices = new Mongo.Collection('prices');

export const Price = Class.create({
    name: 'price.lottery',
    collection: Prices,
    fields: {
        assetName: String,
        price: Number,
        prices: Object // [{3: 13994},{4: 13994},{5: 13994}]
    }
})