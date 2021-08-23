import {Addr, Money, MoneyCoins} from "../../imports/api/mongo/money";
import {Transaction, TransactionType} from "../../imports/api/mongo/transactions";
import {Transactions_manager} from "./money_manager";

import { Random } from 'meteor/random'

const moneyMaster = [
    {
        userId: 'cron',
        amount: (40_000_000 * Math.pow(10, 8)),
    },
    {
        userId: 'user1',
    },
    {
        userId: 'user2',
    },
    {
        userId: 'user3',
    }
];

if(!Money.findOne()) {
    moneyMaster.forEach(user=> {
        const money = new Money(user);
        money.save();
        const address = new Addr({userId: user.userId});
        address.save();
    });
}

const txs = [
    {
        userId: moneyMaster[0].userId,
        sender: Addr.findOne({userId: moneyMaster[0].userId}).address,
        recipient: Addr.findOne({userId: moneyMaster[1].userId}).address,
        amount: 1_000,
        type: TransactionType.SEND,
        coin: MoneyCoins.WYNNE
    }
];

if(!Transaction.findOne()) {
    txs.forEach(tx=> {
        const txs = new Transactions_manager(tx.userId);
        txs.create(tx);
    })

    for(let i = 0; i < 10; i++) {
        const tx = {
            userId: moneyMaster[0].userId,
            sender: Random.id(32),
            recipient: Addr.findOne({userId: moneyMaster[3].userId}).address,
            amount: 10_000,
            type: TransactionType.SEND,
            coin: MoneyCoins.WYNNE
        }

        const txs = new Transactions_manager(tx.userId);
        txs.create(tx);
    }
}