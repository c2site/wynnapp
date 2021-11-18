import React, { useState } from 'react';
import { Button, Modal, Form, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Meteor} from "meteor/meteor";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import {cookies} from "../../../utils";
import {toast} from "react-toastify";
import { useTranslation } from "react-i18next";
import Login from  '/imports/ui/components/header/components/Login';

import * as EmailValidator from 'email-validator';
import {useTracker} from "meteor/react-meteor-data";

const Registration = (props) => {
  const {
  } = props;

  const {t, i18n} = useTranslation();
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const login = useTracker(()=>Meteor.users.findOne(), []);
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const toggle = () => {
    if(login) {
      FlowRouter.go('buy')
    } else {
      setModal(!modal)
    }
  };
  const invite = useTracker(()=>cookies.get('invite'), []);

  const onSubmit = (e) => {
    e.preventDefault();

    if(password !== confirm) {
      toast.error('Error password');
      return;
    }

    if(!EmailValidator.validate(email)) {
      toast.error('Email error');
      return;
    }
    Accounts.createUser({
      email: email,
      password: password,
      profile: { invite: invite },
    }, (err) => {
      if (err) {
        toast.error(t(err.reason));
      } else {
        toggle();
      }
    });
  };

  console.log(invite);


  return (
    <>
      <Button color={props.color} onClick={toggle}>
        {props.text}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={'modal-app modal-login'}>
        <ModalHeader toggle={toggle}>{t('form.registration')}</ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={(e)=>onSubmit(e)}>
            {/*<div className="input-box">*/}
            {/*  <Label for="">name</Label>*/}
            {/*  <Input type="text"/>*/}
            {/*</div>*/}
            <div className="input-box">
              <Label for="">{t('form.email')}</Label>
              <div className="holder-input">
              <Input type="email"  value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
                <span className="ico">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="#1E2632"/>
                    </svg>
                  </span>
              </div>
            </div>
            {!invite ? (<></>) : (
                <div className="input-box">
              <Label for="">{t('form.ref')}</Label>
              <div className="holder-input">
                <Input type="text"  value={invite} disabled={true}/>
                <span className="ico">
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.67 9.12988C17.04 10.0599 18 11.3199 18 12.9999V15.9999H21C21.5523 15.9999 22 15.5522 22 14.9999V12.9999C22 10.8199 18.43 9.52988 15.67 9.12988Z" fill="#1E2632"/>
                      <path d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C13.53 0 13.09 0.0999998 12.67 0.24C13.5 1.27 14 2.58 14 4C14 5.42 13.5 6.73 12.67 7.76C13.09 7.9 13.53 8 14 8Z" fill="#1E2632"/>
                      <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2Z" fill="#1E2632"/>
                      <path d="M8 9C5.33 9 0 10.34 0 13V15C0 15.5523 0.447715 16 1 16H15C15.5523 16 16 15.5523 16 15V13C16 10.34 10.67 9 8 9ZM14 14H2V13.01C2.2 12.29 5.3 11 8 11C10.7 11 13.8 12.29 14 13V14Z" fill="#1E2632"/>
                      </svg>
                  </span>
              </div>
            </div>
            )}
            <div className="input-box">
              <Label for="">{t('form.password')}</Label>
              <div className="holder-input">
              <Input type={isRevealPwd ? "text" : "password"} value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/>
                <span className="ico">
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM5 5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5V5ZM14 19H2V9H14V19ZM8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16Z" fill="#1E2632"/>
                    </svg>
                  </span>
                <span className="show-pass" onClick={()=>setIsRevealPwd(!isRevealPwd)}>
                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" fill="#B0B0B0"/>
                    </svg>
                  </span>
              </div>
            </div>
            <div className="input-box">
              <Label for="">{t('form.password2')}</Label>
              <div className="holder-input">
              <Input type={isRevealPwd ? "text" : "password"}  value={confirm} onChange={(e)=>setConfirm(e.currentTarget.value)}/>
                <span className="ico">
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM5 5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5V5ZM14 19H2V9H14V19ZM8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16Z" fill="#1E2632"/>
                    </svg>
                  </span>
                <span className="show-pass" onClick={()=>setIsRevealPwd(!isRevealPwd)}>
                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" fill="#B0B0B0"/>
                    </svg>
                  </span>
              </div>
            </div>
            <div className="flex f-space-between f-align-center">
              <div className="remember-box">
                <input type="checkbox" id="terms" defaultChecked={true}/>
                <label htmlFor="terms">{t('form.terms')}</label>
              </div>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <div className="btn-box">
            <Button color="black" className="login-btn" onClick={(e)=>onSubmit(e)} type={'submit'}>
              {t('form.create')}
            </Button>
            <Button color="close-default" onClick={toggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {t('form.close')}
            </Button>
          </div>

          <div className="w-100 flex flex-center">
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Registration;
