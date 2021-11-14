import { useTracker } from 'meteor/react-meteor-data';
import {Meteor} from "meteor/meteor";
import {User} from "/imports/api/mongo/users";

export default function hook_useCurrentUser() {
    const user = useTracker(() => Meteor.isClient && User.findOne({_id: Meteor.userId()}))
    return user
}