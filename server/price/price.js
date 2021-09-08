import { SyncedCron } from 'meteor/littledata:synced-cron';

import {Price} from "../../imports/api/mongo/price";

const startPrice = 0.000026;

export function getPrice() {
    Price.find().map(coin=>{
        if(coin.cgName === 'demo') return;
        const price = HTTP.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.cgName}&vs_currencies=btc`);
        const priceOne = price.data[coin.cgName]['btc'];
        const ticketPrice = (startPrice / priceOne);
        console.log(coin.cgName, ticketPrice)
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
    schedule: (parser) => parser.text('every 10 minutes'),
    async job()  {
        getPrice()
    },
});

Meteor.publish('price', function () {
    return Price.find();
})