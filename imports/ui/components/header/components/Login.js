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
            toast.error(t(err.reason));
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
      <Modal isOpen={modal} toggle={toggle} className={'modal-app modal-login'}>
        <ModalHeader toggle={toggle}>{t('form.title_login')}</ModalHeader>
        <>
          <ModalBody>
            <Form className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="input-box">
                <Label for="">{t('form.email')}</Label>
                <div className="holder-input">
                  <Input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                  <span className="ico">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="#1E2632"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="input-box">
                <Label for="">{t('form.password')}</Label>
                <div className="holder-input">
                  <Input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                  <span className="ico">
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM5 5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5V5ZM14 19H2V9H14V19ZM8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16Z" fill="#1E2632"/>
                    </svg>
                  </span>
                  <span className="show-pass">
                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" fill="#B0B0B0"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex f-space-between f-align-center">
                <div className="remember-box">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">{t('form.remember')}</label>
                </div>
                <RecoveryFrom />
              </div>
              <div className="btn-box f-space-between">
                <Button color="black" className="login-btn" onClick={(e) => onSubmit(e)} type={'submit'}>
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

            <div className="w-100 flex flex-center">
              <Registration color="links" text={t('form.reg_link')}/>
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
