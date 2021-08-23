import {Addr, Money} from "../../imports/api/mongo/money";
import {Transaction} from "../../imports/api/mongo/transactions";

export class Money_manager {
    constructor(userId) {
        this.money = Money.findOne({userId: userId});
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
        // получатель не найден - отменяем
        if(!recipient) return;

        const deposit = new Money_manager(recipient.userId);
        deposit.deposit(tx.amount);

        const withdrawal = new Money_manager(sender.userId);
        withdrawal.withdrawal(tx.amount);
    }

    create(txs) {
        const tx = new Transaction({
            userId: this.userId,
            ...txs
        });
        tx.save();

        this._send(tx);
    }
}