import {Addr, Money} from "../../imports/api/mongo/money";
import {Transaction, TransactionType} from "../../imports/api/mongo/transactions";
import {Coin} from "../../imports/api/mongo/coins";
import TronSend from "../tron/send";


export class Money_manager {
    constructor(userId, name) {
        this.userId = userId;
        this.money = Money.findOne({userId: userId, coins: name});
        this.address = Addr.findOne({userId: userId}).address;
        this.asset = Coin.findOne({name: name});
        this.masterAddress = Addr.findOne({userId: 'master'}).address;
    }

    deposit(amount) {
        this.money.amount += amount;
        this.money.save();
    }

    withdrawal(amount) {
        this.money.amount -= amount;
        this.money.save();
    }

    _check(amount) {
        if(this.money.amount < amount) throw new Meteor.Error('error_balance','notification.amount');
        if(!Meteor.isDevelopment) {
            if(Transaction.findOne({sender: this.address, createdAt: {$gte: new Date( Date.now()- (1000 * 60) ) }})) throw new Meteor.Error('error.timer', 'notification.wait');
        }

    }

    async send({recipient, amount}) {
        amount = amount * Math.pow(10, this.money.precision);
        this._check(amount)
        const tx = {
            type: TransactionType.SEND,
            amount: amount,
            recipient: recipient,
            precision: this.money.precision,
            //txid: 'test_tx_id',
            sender: this.address,
            asset: this.asset.asset
        }

        const tron = new TronSend(this.userId, this.asset.asset)

        tx.txid = await tron.send({amount: tx.amount, address: recipient});

        const txs = new Transactions_manager(this.userId);
        txs.create(tx);
    }



    async buy({amount}) {
        amount = amount * Math.pow(10, this.money.precision);
        this._check(amount)
        const txUser = {
            type: TransactionType.BUY,
            amount: amount,
            recipient: this.masterAddress,
            //txid: 'test_tx_id_game',
            sender: this.address,
            asset: this.asset.asset,
            precision: this.money.precision,
            game: {
                game_5: amount * 0.3,
                game_4: amount * 0.3,
                game_3: amount * 0.3,
                dev: amount * 0.1
            }
        }

        const tron = new TronSend(this.userId, this.asset.asset)
        txUser.txid = await tron.send({amount: txUser.amount, address: this.masterAddress});

        const txs = new Transactions_manager(this.userId);
        txs.create(txUser);

    }
}

export class Transactions_manager {

    constructor(userId) {
        this.userId = userId;
    }

    _send (tx) {
        const recipient = Addr.findOne({address: tx.recipient});
        const sender = Addr.findOne({address: tx.sender}) || {userId: 'cron'};
        const asset = Coin.findOne({asset: tx.asset});
        if(!asset) return;
        if(!recipient) return;

        const deposit = new Money_manager(recipient.userId, asset.name);
        deposit.deposit(tx.amount);

        const withdrawal = new Money_manager(sender.userId, asset.name);
        withdrawal.withdrawal(tx.amount);

    }

    _buyLottery(tx) {
        const asset = Coin.findOne({asset: tx.asset});

        const sender = Addr.findOne({address: tx.sender});
        const withdrawal = new Money_manager(sender.userId, asset.name);
        withdrawal.withdrawal(tx.amount);


        const game = tx.game;

        console.log(tx);
        for(let userId in game) {
            console.log(game[userId])
            const deposit = new Money_manager(userId, asset.name);
            deposit.deposit(game[userId]);
        }
    }

    create(txs) {
        const tx = new Transaction({
            userId: this.userId,
            ...txs
        });

        //if(!Addr.findOne({address: {$in: [tx.recipient, tx.sender]}})) return;

        //console.log(txs);
        if(tx.type === TransactionType.SEND) {
            this._send(tx);
        } else if (tx.type === TransactionType.BUY) {
            this._buyLottery(tx);
        }

        tx.save()
    }
}