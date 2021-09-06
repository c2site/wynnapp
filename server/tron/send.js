import {Addr} from "../../imports/api/mongo/money";
import {Coin} from "../../imports/api/mongo/coins";

const TronWeb = require('tronweb');

class TronSend {
    constructor(userId, asset) {
        this.asset = Coin.findOne({name: asset});
        this.userId = userId;
        this.address = Addr.findOne({userId: this.userId});
        this.tronWeb = new TronWeb({
            fullNode: 'http://5.45.78.116:8090',
            solidityNode: 'http://5.45.78.116:8091',
            eventServer: 'http://5.45.78.116:8099',
            privateKey: this.address.privateKey
        });
    }

    async _send({amount, address}) {
        if(this.asset.name === 'trx') {
            const trxTxs = await this.tronWeb.transactionBuilder.sendTrx(
                address,
                this.tronWeb.toSun(amount),
                this.address.address
            );

            const signedtxn = await this.tronWeb.trx.sign(
                trxTxs,
                this.address.privateKey
            );
            const receipt = await this.tronWeb.trx.sendRawTransaction(
                signedtxn
            );
            return receipt.txid;
        } else {
            const {
                abi
            } = await this.tronWeb.trx.getContract(this.asset.asset);

            const contract = await this.tronWeb.contract(abi.entrys, this.asset.asset);

            const tx = await contract.methods.transfer(address, parseInt(amount * Math.pow(10, this.decimals))).send({
                callValue:0,
                shouldPollResponse: false
            });
            await this._saveTx(tx, address, amount);
            return tx;
        }
    }

    async send({amount, address}) {
       await this._send({amount, address});
    }
}