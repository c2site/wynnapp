import {Coin} from "../../imports/api/mongo/coins";
import {Addr, Money} from "../../imports/api/mongo/money";
import { Random } from 'meteor/random'
import TronNode from "../tron/tron";
import {check, Match} from "meteor/check";
import {User} from "../../imports/api/mongo/users";

class Users_manager {
    static async createUser(userId) {
        // create balance
        Coin.find().map(coin=> {
            const money = new Money({
                userId: userId,
                coins: coin.name,
                precision: coin.precision
            });
            money.save();
        })

        const addr = await TronNode.createAddress();
        console.log(addr);
        const address = new Addr({
            userId: userId,
            ...addr
        })

        address.save();
    }
}

export {Users_manager};

Accounts.onCreateUser((options, user) => {
    check(options, {
        email: String,
        password: Object,
        profile: {
            invite: Match.Maybe(String),
        },
    });

    Users_manager.createUser(user._id);

    //Notification.register(options.email, validUser.settings.lang);
    const validUser = new User(user);

    return validUser.raw();
});