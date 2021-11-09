import React, {useState} from "react";
import {toast} from "react-toastify";
import {Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import TwoFAConfirm from "../../modal/TwoFAConfirm";
import { useTranslation } from "react-i18next";

const RecoveryFrom = () => {
    const {t, i18n} = useTranslation();
    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState('');
    const toggle = () => setModal(!modal);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Incorrect email address')
            return;
        }

        Accounts.forgotPassword({ email }, (err) => {
            if (err) {
                toast.error(err.reason);
            } else {
                toast.success('Check you email');
            }
        });

    };


    return (
        <>
            <Button className="btn btn-links" onClick={toggle}>
                {t('form.recovery')}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={'modal-app'}>
                <ModalHeader toggle={toggle}>{t('form.recovery')}</ModalHeader>
                <>
                    <ModalBody>
                        <Form className="form" onSubmit={() => onSubmit}>
                            <div className="input-box">
                                <Label for="">{t('form.email')}</Label>
                                <Input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                            </div>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <div className="btn-box">
                            <Button color="black" onClick={(e) => onSubmit(e)} type={'submit'}>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.39325 9.83193C1.5655 9.51356 1.53105 8.3552 2.33842 7.98822L17.1842 1.24011C18.0254 0.857758 18.8908 1.7231 18.5084 2.56428L11.7603 17.4101C11.3933 18.2175 10.235 18.183 9.9166 17.3553L7.98633 12.3366C7.88475 12.0725 7.67605 11.8638 7.41196 11.7622L2.39325 9.83193Z" stroke="white" stroke-width="2"/>
                                </svg>
                                {t('form.send')}
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
                    </ModalFooter>
                </>
            </Modal>
        </>
    );
}

export default RecoveryFrom;