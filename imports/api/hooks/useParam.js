import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { useTracker } from 'meteor/react-meteor-data';

const useParam = (key) => useTracker(() => FlowRouter.getParam(key), []);

const useParamNumber = (key, def) => {
  const param = Number(useParam(key));

  return Number.isNaN(param) ? def : param;
};

export { useParam, useParamNumber };
