import React, { useState } from 'react';
import { Button, Modal, Form, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Moment from "react-moment";
import { useTranslation } from "react-i18next";

const СommissionModal = (props) => {
  const {
  } = props;
  const {t, i18n} = useTranslation();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <>
      <Button className="btn-default" onClick={toggle}>?</Button>
      <Modal isOpen={modal} toggle={toggle} className={'modal-app'}>
        <ModalHeader toggle={toggle}>{t('form.commission')}</ModalHeader>
        <ModalBody>
          <div className="table profile-table">
            <div className="table-head">
              <table>
                <thead>
                <tr>
                  <th>{t('form.commission')}</th>
                  <th>{t('form.discount')}</th>
                </tr>
                </thead>
              </table>
            </div>
            <table>
              <tbody>
                <tr>
                  <td><span className="th-name">{t('form.commission')}</span>10</td>
                  <td><span className="th-name">{t('form.discount')}</span>10%</td>
                </tr>
                <tr>
                  <td><span className="th-name">{t('form.commission')}</span>50</td>
                  <td><span className="th-name">{t('form.discount')}</span>20%</td>
                </tr>
                <tr>
                  <td><span className="th-name">{t('form.commission')}</span>170</td>
                  <td><span className="th-name">{t('form.discount')}</span>30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="btn-box">
            <Button color="close-default" onClick={toggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {t('form.close')}
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default СommissionModal;
