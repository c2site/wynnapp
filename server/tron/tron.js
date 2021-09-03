import settings, {settingsSet} from "../settings";
import {Coin} from "../../imports/api/mongo/coins";
import {Transactions, TransactionType} from "../../imports/api/mongo/transactions";
import {Address} from "../../imports/api/mongo/money";
import {Money_manager, Transactions_manager} from "../money/money_manager";

const TronGrid = require('trongrid');
const TronWeb = require('tronweb');
const tronWeb = new TronWeb({
    fullNode: 'http://5.45.78.116:8090',
    solidityNode: 'http://5.45.78.116:8091',
    eventServer: 'http://5.45.78.116:8099'
});

const tronGrid = new TronGrid(tronWeb);

class TronNode {
    constructor() {
        this.node = tronWeb;
        this.grid = tronGrid;
        this.event = (method, params) => {
            if(false) {
                return HTTP.get(`http://localhost:3032/${method}`, params).data.data;
            } else {
                return HTTP.get(`http://5.45.78.116:3089/${method}`, params).data.data;
            }
        }
    }

    async _getBlock() {
        return this.event('lastBlock');
    }

    _save(tx) {
        const txs = new Transactions_manager('cron');
        txs.create({
            ...tx,
            userId: 'cron',
            type: TransactionType.SEND,
            sender: tx.from,
            recipient: tx.to,
            txid: tx.txid,
            amount: tx.value
        });
    }

    static async createAddress() {
        const tron = await tronWeb.createAccount();
        return {
            privateKey: tron.privateKey,
            address: tron.address.base58
        }
    }


    async _getTransactionsTron(number) {
        const txs = this.event('transactions', {number: number});
        txs.map(tx=> {
            this._save({...tx, asset: 'master1'});
        })
    }

    async _getTransactionContract(number) {
        const txs = this.event('contracts', {params: {number: number, address: ['TBT6Asn7eZ8GD5s7T3r579s6XxKSe9m12E']}});
        txs.map(tx=> {
            console.log(tx);
            if(Transactions.findOne({txid: tx.txid})) return;
            this._save({...tx, asset: tx.contract});
        })
    }

    async startLoadTxs() {
        const number = settings('block', 0);
        const blockchain = await this._getBlock();
        if(number === 0) settingsSet('block', blockchain);
        for(let i = number; i < blockchain; i++) {
            await this._getTransactionsTron(i);
            await this._getTransactionContract(i);
            settingsSet('block', i);
        }
    }
}

export default TronNode;