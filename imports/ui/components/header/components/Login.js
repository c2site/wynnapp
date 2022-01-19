import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import {useTranslation} from "react-i18next";
import {injected} from "../../wallet/connectors";
import {useWeb3React} from "@web3-react/core";
import useBalance from "../../wallet/balance";

const Login = () => {
  const {t, i18n} = useTranslation();
  const [modal, setModal] = useState(false);

  const {active, account, library, connector, activate, deactivate} = useWeb3React();

  const  connect = async () => {
    try {
      if(active) {
        await deactivate()
      } else {
        await activate(injected);
      }
    } catch (e) {
      console.error(e);
    }
  }


  return (
    <>
      <Button className="btn btn-default login-ticket" onClick={connect}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5253 14.3486C14.1995 13.6936 12.1695 12.9167 10 12.9167C7.83052 12.9167 5.80049 13.6936 4.47467 14.3486C3.45001 14.8547 2.83962 15.8875 2.70497 17.0224L2.5 18.75H17.5L17.295 17.0224C17.1604 15.8875 16.55 14.8547 15.5253 14.3486Z"
            stroke="white" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M10 9.16666C12.0711 9.16666 13.75 7.48772 13.75 5.41666C13.75 3.34559 12.0711 1.66666 10 1.66666C7.92893 1.66666 6.25 3.34559 6.25 5.41666C6.25 7.48772 7.92893 9.16666 10 9.16666Z"
            stroke="white" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{active ? (<>{account.substring(0,5)}...{account.slice(-3)}</>) : 'Wallet connect'}</span>
      </Button>
    </>
  );
}

export default Login;
