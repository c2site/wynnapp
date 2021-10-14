import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import React from "react";

const Navigation = () => {
  return (
    <>
          <ul className="nav">
            <li>
              <a href={FlowRouter.path('/')}
              >Home</a></li>
            <li><a href={FlowRouter.path('info')}>Info</a></li>
            <li>
              <a href={FlowRouter.path('buy')}
            >Lottery</a></li>
            <li>
              <a href={FlowRouter.path('history')}
              >History Games</a></li>
            {/*<li><a href={FlowRouter.path('swap')}>Buy WYNN</a></li>*/}
            {/*<li><a href="#">Option</a></li>*/}
            {/*<li><a href="#">Contact</a></li>*/}
          </ul>
    </>
  );
};

export default Navigation;
