import {Addr, Money} from "../../imports/api/mongo/money";
import {Coin} from "../../imports/api/mongo/coins";

const TronWeb = require('tronweb');

class TronSend {
    constructor(userId, asset) {
        this.asset = Coin.findOne({asset: asset});
        this.userId = userId;
        this.address = Addr.findOne({userId: this.userId});
        this.tronWeb = new TronWeb({
            fullNode: 'http://5.45.78.116:8090',
            solidityNode: 'http://5.45.78.116:8091',
            eventServer: 'http://5.45.78.116:8099',
            privateKey: this.address.privateKey
        });
    }

    async _updateTrx() {
        const money = Money.findOne({userId: this.userId, coins: 'trx'});
        money.amount = await this.tronWeb.trx.getBalance(this.address.address);
        money.save();
    }

    async _send({amount, address}) {
        //if(await this.tronWeb.trx.getBalance(this.address.address) < 1 * Math.pow(10, 6)) throw new Meteor.Error('error.trx.balance', 'You need min 5 TRX');
        if(this.asset.name === 'trx') {
            const trxTxs = await this.tronWeb.transactionBuilder.sendTrx(
                address,
                amount,
                this.address.address
            );

            const signedtxn = await this.tronWeb.trx.sign(
                trxTxs,
                this.address.privateKey
            );
            const receipt = await this.tronWeb.trx.sendRawTransaction(
                signedtxn
            );

            setTimeout(async ()=> {
                await this._updateTrx();
            }, 1000 * 60)
            return receipt.txid;
        } else {
            const {
                abi
            } = await this.tronWeb.trx.getContract(this.asset.asset);

            const contract = await this.tronWeb.contract(abi.entrys, this.asset.asset);

            const tx = await contract.methods.transfer(address, amount).send({
                callValue:0,
                shouldPollResponse: false
            });
            return tx;
        }
    }

    async send({amount, address}) {
        const tx = await this._send({amount, address});
        console.log(tx);
       return tx;
    }
}

export default TronSend;