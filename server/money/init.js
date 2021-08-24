import {Addr, Money} from "../../imports/api/mongo/money";
import {TransactionType} from "../../imports/api/mongo/transactions";
import {Transactions_manager} from "./money_manager";


function randomInt(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


import { Random } from 'meteor/random'
import {Coin} from "../../imports/api/mongo/coins";
import {Users_manager} from "../user/users";

const Coins = [
    {name: 'wynne', asset: Random.id(32), precision: 8},
    {name: 'trx', asset: Random.id(32), precision: 8},
    {name: 'usdt', asset: Random.id(32), precision: 8},
    {name: 'xxp', asset: Random.id(32), precision: 8}
];

if(!Coin.findOne()) {
    Coins.map(coin=> {
        const c = new Coin(coin);
        c.save();
    })
}

if(!Money.findOne()){
    Users_manager.createUser('cron');
    Users_manager.createUser('user1');
    // Users_manager.createUser('user2');
    // Users_manager.createUser('user3');
    Users_manager.createUser('dev');
    Users_manager.createUser('master');

    Users_manager.createUser('game_5');
    Users_manager.createUser('game_4');
    Users_manager.createUser('game_3');
}



// check transactions

if(false) {
    function createTxs(asset) {
        const user = Addr.find().fetch();
        const tx = {
            //userId: user[0].userId,
            asset: asset,
            amount: 1_000,
            sender: Addr.findOne({userId: user[0].userId}).address,
            recipient: Addr.findOne({userId: user[2].userId}).address,
            type: TransactionType.SEND
        }
        const transactions = new Transactions_manager(user[0].userId);
        transactions.create(tx);
    }
    for(let i = 0; i < 10; i++) {
        Coin.find().map(x=> {
            createTxs(x.asset);
        });
    }

}
