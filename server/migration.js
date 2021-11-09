import {Addr} from "../imports/api/mongo/money";
import {Users_manager} from "./user/users";

if(!Addr.findOne({userId: 'swap'})) {
    Users_manager.createUser('swap');
}

if(!Addr.findOne({userId: 'invite'})) {
    Users_manager.createUser('invite');
}