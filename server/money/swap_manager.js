import {Addr} from "../../imports/api/mongo/money";
import {Coin} from "../../imports/api/mongo/coins";
import {Price} from "../../imports/api/mongo/price";
import {Money_manager} from "./money_manager";

class Swap_manager {
    constructor(userId, asset) {
        this.userId = userId;
        this.address = Addr.findOne({userId: userId}).address;
        this.asset = Coin.findOne({name: asset});
        this.price = Price.findOne({assetName: asset});
        this.swapAddress = 'TU3xyLDSWzutmTUHTS46EYfBfNsHL1aU7Y';
    }

    async _sendUserCoin({amount}) {
        amount = Number(amount.toFixed(6))
        const money = new Money_manager(this.userId, this.asset.name);
        await money.send({recipient: this.swapAddress, amount: amount});
    }

    async _sendWynn({amount}) {
        const money = new Money_manager('swap', 'wynn');
        await money.send({recipient: this.address, amount: amount});
    }

    _getPrice(amount) {
        return amount * this.price.prices.price5;
    }

    async swap({amount}) {
        const swapCoinAmount = this._getPrice(amount);
        await this._sendUserCoin({amount: swapCoinAmount});
        await this._sendWynn({amount})
    }

}

export default Swap_manager