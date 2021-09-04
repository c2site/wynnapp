import React, { useState } from 'react';
import { Button, Modal, Form, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = (props) => {
  const {
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Button className="btn btn-default" onClick={toggle}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5253 14.3486C14.1995 13.6936 12.1695 12.9167 10 12.9167C7.83052 12.9167 5.80049 13.6936 4.47467 14.3486C3.45001 14.8547 2.83962 15.8875 2.70497 17.0224L2.5 18.75H17.5L17.295 17.0224C17.1604 15.8875 16.55 14.8547 15.5253 14.3486Z" stroke="white" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 9.16666C12.0711 9.16666 13.75 7.48772 13.75 5.41666C13.75 3.34559 12.0711 1.66666 10 1.66666C7.92893 1.66666 6.25 3.34559 6.25 5.41666C6.25 7.48772 7.92893 9.16666 10 9.16666Z" stroke="white" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        profile
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={'modal-orange modal-app'}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={()=>onSubmit}>
            <div className="input-box">
              <Label for="">Email</Label>
              <Input type="email"  />
            </div>
            <div className="input-box">
              <Label for="">Password</Label>
              <Input type="password"  />
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-primary" onClick={()=>onSubmit} type={'submit'}>
            Вход
          </Button>

          <Button className="btn btn-default" onClick={toggle}>
            Закрыть
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;
