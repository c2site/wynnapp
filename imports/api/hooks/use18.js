import { useTracker } from 'meteor/react-meteor-data';
import { i18n } from 'meteor/anti:i18n';

const use18 = (...args) => {
  const deps = args.length > 1 ? args.pop() : [];
  return useTracker(() => i18n(...args), deps);
};

export default use18;
