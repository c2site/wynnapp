import Swap_manager from "./swap_manager";
import {Money_manager} from "./money_manager";

Meteor.methods({
    'swap': async function (swap) {
        check(this.userId, String);
        check(swap, {
            amount: String,
            asset: String
        })

        console.log(swap);
        // const swapWynn = new Swap_manager(this.userId, swap.asset);
        // await swapWynn.swap({amount: Number(swap.amount)});
    },
    'user.send.coin': async function (send) {
        check(this.userId, String);
        check(send, Object);

        console.log(send);
        const money = new Money_manager(this.userId, send.coins);
        await money.send({recipient: send.address, amount: Number(send.amount)});
    }
})