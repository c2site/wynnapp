import {Coin} from "../../imports/api/mongo/coins";
import {Addr, Money} from "../../imports/api/mongo/money";
import { Random } from 'meteor/random'
import TronNode from "../tron/tron";

class Users_manager {
    static createUser(userId) {
        // create balance
        Coin.find().map(coin=> {
            const money = new Money({
                userId: userId,
                coins: coin.name,
                precision: coin.precision
            });
            money.save();
        })

        const addr = TronNode.createAddress();
        const address = new Addr({
            userId: userId,
            ...addr
        })

        address.save();
    }
}

export {Users_manager};