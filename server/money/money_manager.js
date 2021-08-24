import {Addr, Money} from "../../imports/api/mongo/money";
import {Transaction, TransactionType} from "../../imports/api/mongo/transactions";
import {Coin} from "../../imports/api/mongo/coins";

export class Money_manager {
    constructor(userId, name) {
        this.money = Money.findOne({userId: userId, coins: name});
    }

    deposit(amount) {
        this.money.amount += amount;
        this.money.save();
    }

    withdrawal(amount) {
        this.money.amount -= amount;
        this.money.save();
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

    create(txs) {
        const tx = new Transaction({
            userId: this.userId,
            ...txs
        });
        tx.save();
        
        
        if(tx.type === TransactionType.SEND) {
            this._send(tx);
        }

        

    }
}