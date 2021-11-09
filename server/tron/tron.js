import settings, {settingsSet} from "../settings";
import {Coin} from "../../imports/api/mongo/coins";
import {Transactions, TransactionType} from "../../imports/api/mongo/transactions";
import {Addr, Address} from "../../imports/api/mongo/money";
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
    constructor(userId, asset) {
        this.node = tronWeb;
        this.grid = tronGrid;
        this.event = (method, params) => {
            return HTTP.get(`http://5.45.78.116:3089/${method}`, params).data.data;
        }

        this.address = Addr.findOne({userId: userId});
        this.asset = Coin.findOne({name: asset});
    }

    async _getBlock() {
        return this.event('lastBlock');
    }

    _save(tx) {
        const txs = new Transactions_manager('cron');
        const coin = Coin.findOne({asset: tx.asset})
        //console.log(tx);
        txs.create({
            ...tx,
            userId: 'cron',
            type: TransactionType.SEND,
            sender: tx.from,
            recipient: tx.to,
            txid: tx.txid,
            amount: tx.value,
            precision: coin.precision
        });
    }

    static async createAddress() {
        const tron = await tronWeb.createAccount();
        return {
            privateKey: tron.privateKey,
            address: tron.address.base58
        }
    }

    _send({amount, address}) {

    }

    async send(amount, address) {

    }


    async _getTransactionsTron(number) {
        const txs = this.event('transactions', {params: {number: number}});
        txs.map(tx=> {
            if(Transactions.findOne({txid: tx.txid})) return;
            if(Addr.findOne({address: tx.to})) {
                console.log(`Transaction find to ${tx.to} amount: ${tx.value}`);
                this._save({...tx, asset: 'master1'});
            }
        })
    }

    async _getTransactionContract(number) {
        const txs = this.event('contracts', {params: {number: number, address: ['TBT6Asn7eZ8GD5s7T3r579s6XxKSe9m12E','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', 'TKAmuifcYR6iXRWa3igiNe2xZroTwGCKH9']}});
        txs.map((tx)=> {
            if(Transactions.findOne({txid: tx.txid})) return;
            if(!tx.to) return;
            if(Addr.findOne({address: tx.to})) {
                console.log(`Transaction find to ${tx.to} amount: ${tx.value} / contract ${tx.contract} / txid: ${tx.txid}`);
                this._save({...tx, asset: tx.contract});
            }
        })
    }

    async startLoadTxs() {
        const number = settings('block', 0);
        const blockchain = await this._getBlock();
        if(number === 0) settingsSet('block', blockchain);
        for(let i = number; i < blockchain; i++) {
            //console.log('Start loading block', i);
            await this._getTransactionsTron(i);
            await this._getTransactionContract(i);
            settingsSet('block', i);
        }
    }
}

export default TronNode;