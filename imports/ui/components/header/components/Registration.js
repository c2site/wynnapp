import React, { useState } from 'react';
import { Button, Modal, Form, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Meteor} from "meteor/meteor";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import {cookies} from "../../../utils";
import {toast} from "react-toastify";

const Registration = (props) => {
  const {
  } = props;

  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const toggle = () => setModal(!modal);
  const invite = cookies.get('invite');

  const onSubmit = (e) => {
    e.preventDefault();
    Accounts.createUser({
      email: email,
      password: password,
      profile: { invite },
    }, (err) => {
      if (err) {
        toast.error(err.reason);
      } else {
        toggle();
      }
    });
  };

  return (
    <>
      <Button className="btn btn-primary" onClick={toggle}>
        join us
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={'modal-app'}>
        <ModalHeader toggle={toggle}>join us</ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={(e)=>onSubmit(e)}>
            <div className="input-box">
              <Label for="">name</Label>
              <Input type="text"/>
            </div>
            <div className="input-box">
              <Label for="">Email</Label>
              <Input type="email"  value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
            </div>
            <div className="input-box">
              <Label for="">Password</Label>
              <Input type="password"  value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/>
            </div>
            <div className="input-box">
              <Label for="">repeat Password</Label>
              <Input type="password"  value={confirm} onChange={(e)=>setConfirm(e.currentTarget.value)}/>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <div className="btn-box">
            <Button color="black" onClick={(e)=>onSubmit(e)} type={'submit'}>
              <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.39325 11.8319C1.5655 11.5136 1.53105 10.3552 2.33842 9.98822L17.1842 3.24011C18.0254 2.85776 18.8908 3.7231 18.5084 4.56428L11.7603 19.4101C11.3933 20.2175 10.235 20.183 9.9166 19.3553L7.98633 14.3366C7.88475 14.0725 7.67605 13.8638 7.41196 13.7622L2.39325 11.8319Z" stroke="white" stroke-width="2"/>
              </svg>
              send
            </Button>
            <Button color="close-default" onClick={toggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Закрыть
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Registration;
