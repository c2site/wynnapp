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

const ProfileBtn = () => {
  const {t, i18n} = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((prevState) => !prevState);
    const loading = useSubscribe('user.money');
    const user = useTracker(()=>Meteor.user(), []);

  const balance = useTracker(()=> Money.find({userId: Meteor.userId()}).fetch(), []);

    const [coinName, setCoinName] = useState(user?.settings?.dmoney || 'wynn');
  const wallet = useTracker(()=>Money.findOne({userId: user._id, coins: coinName}) || {}, [coinName])
  const ChangeWallet = (e)=> {
    Meteor.call('user.setMoney', e.currentTarget.value);
    setOpen(!isOpen);
    toggle()
  }

  useEffect(()=> {
    setCoinName(user?.settings?.dmoney);
  }, [user])

    if(loading) return  <Loading />;
    return (
      <>
      {/*<div className="profile-btn">
        <strong className="summ">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3334 6.00001V5.33334C11.3334 4.22877 10.438 3.33334 9.33341 3.33334H2.66675C1.56218 3.33334 0.666748 4.22877 0.666748 5.33334V8.00001C0.666748 9.10458 1.56218 10 2.66675 10H4.57151" stroke="white"/>
            <rect x="4.66675" y="6" width="10.6667" height="6.66667" rx="2" stroke="white"/>
            <ellipse cx="10.0001" cy="9.33333" rx="1.33333" ry="1.33333" stroke="white"/>
          </svg>
          <select value={coinName} selectedValue={coinName}  onChange={(e)=>ChangeWallet(e)}>
            {balance?.map(wallet=>(
                <option key={wallet._id} value={wallet.coins}>{wallet.value()} {wallet.coins}</option>
            ))}
          </select>
        </strong>
      </div>*/}
      <Dropdown className="lang-drop drop-red" isOpen={isOpen} toggle={toggle}>
        <DropdownToggle tag={'a'} data-toggle="dropdown" aria-expanded={isOpen} >
          {wallet?.value() || 0} {wallet.coins || "WYNN"}
        </DropdownToggle>
        <DropdownMenu>
          {balance?.map(wallet=>(
            <DropdownItem key={wallet._id} value={wallet.coins} onClick={(e)=>ChangeWallet(e)}>{wallet?.value()} {wallet.coins}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      </>
    )
}

export default ProfileBtn;