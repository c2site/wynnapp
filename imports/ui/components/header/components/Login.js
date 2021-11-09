import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import React, { useState } from 'react';
import { Button, Modal, Form, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from "react-toastify";
import TwoFAConfirm from "../../modal/TwoFAConfirm";
import RecoveryFrom from "./recoveryFrom";
import Registration from "./Registration";
import {useTranslation} from "react-i18next";

const Login = () => {
  const {t, i18n} = useTranslation();
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recovery, setRecovery] = useState(false);

  const toggle = () => setModal(!modal);

  const login = (token) => {
    const methodArguments = [{
      user: { email },
      twoFactorPassword: Accounts._hashPassword(password),
      twoFactorToken: token || null,
    }];

    Accounts.callLoginMethod({
      methodArguments,
      userCallback: (err) => {
        if (err) {
          if (err.error === 'two-factor-required') {
            setShow(true);
          } else {
            toast.error(err.reason);
          }
        } else {
          toggle();
        }
      }
    });
  }


  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Incorrect email address')
      return;
    }
    if (!password) {
      toast.error('Incorrect password')
      return;
    }

    login();
  };


  return (
    <>
      <Button className="btn btn-default" onClick={toggle}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5253 14.3486C14.1995 13.6936 12.1695 12.9167 10 12.9167C7.83052 12.9167 5.80049 13.6936 4.47467 14.3486C3.45001 14.8547 2.83962 15.8875 2.70497 17.0224L2.5 18.75H17.5L17.295 17.0224C17.1604 15.8875 16.55 14.8547 15.5253 14.3486Z"
            stroke="white" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M10 9.16666C12.0711 9.16666 13.75 7.48772 13.75 5.41666C13.75 3.34559 12.0711 1.66666 10 1.66666C7.92893 1.66666 6.25 3.34559 6.25 5.41666C6.25 7.48772 7.92893 9.16666 10 9.16666Z"
            stroke="white" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{t('form.login')}</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={'modal-app'}>
        <ModalHeader toggle={toggle}>{t('form.login')}</ModalHeader>
        <>
          <ModalBody>
            <Form className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="input-box">
                <Label for="">{t('form.email')}</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
              </div>
              <div className="input-box">
                <Label for="">{t('form.password')}</Label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
              </div>
              <div className="btn-box f-align-center">
                <Button color="black" onClick={(e) => onSubmit(e)} type={'submit'}>
                  <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11.3137L6.65685 16.9706L17.9706 5.65687" stroke="white" strokeWidth="2"
                          strokeLinecap="round" />
                  </svg>
                  {t('form.login')}
                </Button>
                <Button color="close-default" onClick={toggle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" />
                    <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" />
                  </svg>
                  {t('form.close')}
                </Button>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>

            <div className="w-100 flex f-space-between">
              <RecoveryFrom />
              <Registration color="links" text={t('form.registration')}/>
            </div>

          </ModalFooter>
        </>
      </Modal>
      <TwoFAConfirm
        open={show}
        close={() => setShow(false)}
        confirm={login}
      />
    </>
  );
}

export default Login;
