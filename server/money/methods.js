import Swap_manager from "./swap_manager";
import {Money} from "../../imports/api/mongo/money";
import {Money_manager} from "./money_manager";

Meteor.methods({
    'swap': async function (swap) {
        check(this.userId, String);
        check(swap, {
            amount: String,
            asset: String
        })

        console.log(swap);
        const swapWynn = new Swap_manager(this.userId, swap.asset);
        await swapWynn.swap({amount: Number(swap.amount)});
    },
    'user.send.coin': async function ({send, wallet}) {
        check(this.userId, String);
        check(send, Object);
        check(wallet, Object);

        const money = new Money_manager(this.userId, wallet.name);
        await money.send({recipient: send.address, amount: send.amount});
    }
})