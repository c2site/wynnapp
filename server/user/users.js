import {Coin} from "../../imports/api/mongo/coins";
import {Addr, Money} from "../../imports/api/mongo/money";
import { Random } from 'meteor/random'
import TronNode from "../tron/tron";
import {check, Match} from "meteor/check";
import {User} from "../../imports/api/mongo/users";
import {Money_manager} from "../money/money_manager";

class Users_manager {
    static _checkInvite(userId) {
        const user = Meteor.users.findOne(userId);
        console.log(user)
    }

    static async createUser(userId) {
        // create balance
        this._checkInvite(userId);
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

        //await this._checkFirstUser(address.address);
    }



    static async _checkFirstUser(address, amount) {
        const money = new Money_manager('master', 'wynn');
        await money.send({recipient: address, amount: amount});
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

    if (options.profile.invite) {
        user.settings.ref.invite = options.profile.invite;
    }

    Users_manager.createUser(user._id);

    //Notification.register(options.email, validUser.settings.lang);
    const validUser = new User(user);

    return validUser.raw();
});
