import Swap_manager from "./swap_manager";

Meteor.methods({
    'swap' () {
        check()
        const swap = new Swap_manager(this.userId);
    }
})