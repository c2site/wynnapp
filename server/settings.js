import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { Union, Class } from "meteor/jagi:astronomy";
import { get } from "./utils";

const AnyValue = Union.create({
  name: "any",
  types: [String, Number, Date, Object, Boolean],
});


const Settings = Class.create({
  name: "settings",
  collection: new Mongo.Collection("settings"),
  fields: {
    value: AnyValue,
  },
});

export default function settings(name, defaultValue) {
  const setting = Settings.findOne(name);
  if (setting) return setting.value;

  const value =
    get(Meteor.settings.private, name) || get(Meteor.settings.public, name, defaultValue);
  if (value == undefined) throw new Error("setting not found: " + name);

  return value;
}

export function settingsSet(name, value) {
  Settings.upsert(name, { $set: { value } });
}

