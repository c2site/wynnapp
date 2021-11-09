import {Addr, Money} from "../../imports/api/mongo/money";
import {TransactionType} from "../../imports/api/mongo/transactions";
import {Money_manager, Transactions_manager} from "./money_manager";


function randomInt(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


import { Random } from 'meteor/random'
import {Coin} from "../../imports/api/mongo/coins";
import {Users_manager} from "../user/users";
import Lottery_manage from "../lottery/lottery_manage";
import TronNode from "../tron/tron";
import {Ticket, TicketStatus} from "../../imports/api/mongo/ticket";
import {Lottery} from "../../imports/api/mongo/lottery";
import {Price} from "../../imports/api/mongo/price";

const Coins = [
    {name: 'wynn', asset: 'TKAmuifcYR6iXRWa3igiNe2xZroTwGCKH9', precision: 6},
    {name: 'trx', asset: 'master1', precision: 6},
    {name: 'usdt', asset: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', precision: 6},
    {name: 'xxp', asset: 'TBT6Asn7eZ8GD5s7T3r579s6XxKSe9m12E', precision: 8}
];

if(!Coin.findOne()) {
    Coins.map(coin=> {
        const c = new Coin(coin);
        c.save();
    })
}

if(!Money.findOne()){
    Users_manager.createUser('cron');
    // Users_manager.createUser('user2');
    // Users_manager.createUser('user3');
    Users_manager.createUser('dev');
    Users_manager.createUser('master');
    Users_manager.createUser('game_5');
    Users_manager.createUser('game_4');
    Users_manager.createUser('game_3');
}



if(Price.find().count() === 0) {
    Coin.find().map(coin=> {
        const price = new Price({
            assetName: coin.name,
            price: 0,
            prices: {'price5': 1,'price6': 2,'price7': 3, 'price8': 3, 'price9': 3},
        });
        price.save();
    })
}

//Users_manager.createUser('cron');



