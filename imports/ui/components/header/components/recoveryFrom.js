import React, {useState} from "react";
import {toast} from "react-toastify";
import {Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import TwoFAConfirm from "../../modal/TwoFAConfirm";

const RecoveryFrom = () => {
    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState('');
    const toggle = () => setModal(!modal);
    const [loading, setLoading] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        if (!email) {
            toast.error('Incorrect email address')
            return;
        }

        Accounts.forgotPassword({ email }, (err) => {
            if (err) {
                toast.error(err.reason);
                setLoading(false)
            } else {
                toggle();
                toast.success('Check you email');
            }
        });

    };


    return (
        <>
            <Button className="btn btn-links" onClick={toggle}>
                Recovery password
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={'modal-app'}>
                <Form className="form" onSubmit={() => onSubmit}>
                <ModalHeader toggle={toggle}>Recovery password</ModalHeader>
                <>
                    <ModalBody>
                        {loading ? (
                            <>Wait....</>
                        ) : (
                            <div className="input-box">
                                <Label for="">Email</Label>
                                <Input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                            </div>
                        )}

                    </ModalBody>
                    <ModalFooter>
                        <div className="btn-box">
                            <Button color="black" onClick={(e) => onSubmit(e)} type={'submit'}>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.39325 9.83193C1.5655 9.51356 1.53105 8.3552 2.33842 7.98822L17.1842 1.24011C18.0254 0.857758 18.8908 1.7231 18.5084 2.56428L11.7603 17.4101C11.3933 18.2175 10.235 18.183 9.9166 17.3553L7.98633 12.3366C7.88475 12.0725 7.67605 11.8638 7.41196 11.7622L2.39325 9.83193Z" stroke="white" stroke-width="2"/>
                                </svg>
                                Send
                            </Button>
                            <Button color="close-default" onClick={toggle}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round" />
                                    <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round" />
                                </svg>
                                Close
                            </Button>
                        </div>
                    </ModalFooter>
                </>
                </Form>
            </Modal>
        </>
    );
}

export default RecoveryFrom;