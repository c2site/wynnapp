import React, { useState } from 'react';
import { Button, Modal, Form, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SendWynn = (props) => {
  const {
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Button className="btn btn-black" onClick={toggle}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2827 5L20.9998 12L14.2827 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="19.7329" y1="12.0317" x2="3.99985" y2="12.0317" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={'modal-app'}>
        <ModalHeader toggle={toggle}>Send WYNN</ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={()=>onSubmit}>
            <div className="row">
              <div className="col-md-9">
                <div className="input-box">
                  <Label for="">wallet adress</Label>
                  <Input type="text"  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-box">
                  <Label for="">amount</Label>
                  <div className="input-max">
                    <Input type="number"  />
                    <span className="max">max</span>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <div className="btn-box">
            <Button color="black" onClick={()=>onSubmit} type={'submit'}>
              <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.3137L6.65685 16.9706L17.9706 5.65687" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
              send
            </Button>
            <Button color="close-default" onClick={toggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Close
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default SendWynn;
