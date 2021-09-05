import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import React from "react";

const Navigation = () => {
  return (
    <>
          <ul className="nav">
            <li>
              <a href={FlowRouter.path('/')}
              >Home</a></li>
            <li>
              <a href={FlowRouter.path('buy')}
            >Lottery</a></li>
            <li><a href="#">Dice</a></li>
            <li><a href="#">Option</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
    </>
  );
};

export default Navigation;
