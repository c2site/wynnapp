import {Addr} from "../../imports/api/mongo/money";
import {Coin} from "../../imports/api/mongo/coins";
import {Price} from "../../imports/api/mongo/price";

class Swap_manager {
    constructor(userId, asset) {
        this.userId = userId;
        this.address = Addr.findOne({userId: userId}).address;
        this.asset = Coin.find({name: asset});
    }

    _checkSwap(swap) {

    }

    _sendUserCoin(amount) {

    }

    _sendWynn(amount) {

    }

    _getPrice(amount) {
        return amount * Price.findOne({assetName: this.asset.name}).prices.price5;
    }

    swap({amount}) {
        const swapCoinAmount = this._getPrice(amount);
        const vol = swapCoinAmount / Math.pow(10, this.asset.precision);

        console.log(vol);
    }

}

export default Swap_manager