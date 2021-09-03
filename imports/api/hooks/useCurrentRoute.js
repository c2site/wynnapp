import { useTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const useCurrentRoute = (name) => useTracker(() => FlowRouter.getRouteName() === name, [name]);

export default useCurrentRoute;
