import { useTracker } from 'meteor/react-meteor-data';

const useSubscribe = (subs, deps = []) => useTracker(() => {
  if (!Array.isArray(subs)) {
    subs = [subs];
  }

  const subscribe = subs.map((sub) => (typeof sub === 'string' ? Meteor.subscribe(sub) : sub));
  return subscribe.some((s) => !s.ready());
}, deps);

export default useSubscribe;
