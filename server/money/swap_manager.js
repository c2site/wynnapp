import {Addr} from "../../imports/api/mongo/money";
import {Coin} from "../../imports/api/mongo/coins";
import {Price} from "../../imports/api/mongo/price";
import {Money_manager} from "./money_manager";

class Swap_manager {
    constructor(userId, asset) {
        this.userId = userId;
        this.address = Addr.findOne({userId: userId}).address;
        this.asset = Coin.find({name: asset});
        this.price = Price.findOne({assetName: asset});
        this.swapAddress = 'TU3xyLDSWzutmTUHTS46EYfBfNsHL1aU7Y';
    }

    async _sendUserCoin({amount}) {
        const money = new Money_manager(this.userId, this.asset);
        await money.send({recipient: this.swapAddress, amount});
    }

    async _sendWynn({amount}) {
        const money = new Money_manager('swap', 'wynn');
        await money.send({recipient: this.address, amount});
    }

    _getPrice(amount) {
        return amount * this.price.prices.price5;
    }

    async swap({amount}) {
        const swapCoinAmount = this._getPrice(amount);
        console.log(swapCoinAmount);
        await this._sendUserCoin(swapCoinAmount);
        await this._sendWynn(amount)

    }

}

export default Swap_manager