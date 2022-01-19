import React, {useEffect, useState} from "react";
import {FlowRouter} from "meteor/ostrio:flow-router-extra";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useTracker } from 'meteor/react-meteor-data'
import {Money} from "../../../../api/mongo/money";
import {Meteor} from "meteor/meteor";
import {useSubscribe} from "../../../../api/hooks";
import Loading from "../../loading";
import { useTranslation } from "react-i18next";
import {cookies} from "../../../utils";
import i18n from "i18next";
import useBalance from "../../wallet/balance";

const ProfileBtn = () => {
    const [balance] = useBalance();
    return (
      <>
        <Dropdown className="lang-drop drop-red">
          <DropdownToggle tag={'a'} data-toggle="dropdown" >
            {balance} WYNN
          </DropdownToggle>
        </Dropdown>
      </>
    )
}

export default ProfileBtn;