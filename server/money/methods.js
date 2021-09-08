import Swap_manager from "./swap_manager";

Meteor.methods({
    'swap' (swap) {
        check(this.userId, String);
        check(swap, {
            amount: String,
            asset: String
        })
        const swapWynn = new Swap_manager(this.userId, swap.asset);
        swapWynn.swap({amount: Number(swap.amount)});
    }
})