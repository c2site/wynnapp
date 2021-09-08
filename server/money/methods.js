import Swap_manager from "./swap_manager";

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
    }
})