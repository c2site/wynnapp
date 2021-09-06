import { SyncedCron } from 'meteor/littledata:synced-cron';

import {Price} from "../../imports/api/mongo/price";

const startPrice = Meteor.isDevelopment ? 0.0000001 : 0.000027;

export function getPrice() {
    Price.find().map(coin=>{
        if(coin.cgName === 'demo') return;
        console.log(coin.cgName)
        const price = HTTP.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.cgName}&vs_currencies=btc`);
        const priceOne = price.data[coin.cgName]['btc'];
        const ticketPrice = (startPrice / priceOne);
        coin.price = priceOne;
        coin.prices = {
            price5: ticketPrice,
            price6: ticketPrice * 2,
            price7: ticketPrice * 3,
            price8: ticketPrice * 5,
            price9: ticketPrice * 8
        };

        coin.save();
    })

}


SyncedCron.add({
    name: 'Update price',
    schedule: (parser) => parser.text('every 60 minutes'),
    async job()  {
        getPrice()
    },
});

Meteor.publish('price', function () {
    return Price.find();
})