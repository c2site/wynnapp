import React, {useState} from "react";

import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import i18n from "i18next";
import {toast} from "react-toastify";
import {useCurrentUser, useSubscribe} from "/imports/api/hooks";

const langs = [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'ENG' },
];

const ChangeLang = ({mobile}) => {
    useSubscribe('user.one')
    const [isOpen, setOpen] = useState(false);
    const user = useCurrentUser()
    const [locale, setLocale] = useState(user?.settings?.lang || i18n.language);


    const close = (lang) => {
        i18n.changeLanguage(lang);
        if(Meteor.loggingIn()) {
            Meteor.call('user.locale', lang, (err)=> {
                toast.error(err.reason);
            })
        }

        setLocale(i18n.language)
        setOpen(!isOpen);
    };

    const toggle = () => setOpen((prevState) => !prevState);

    return (
        <Dropdown className="lang-drop" isOpen={isOpen} toggle={toggle}>
            <DropdownToggle mobile={mobile} tag={'a'} href="#" data-toggle="dropdown" aria-expanded={isOpen}>
                <img src={`/img/flag-${locale}.png`} alt="" />
                <span>{locale}</span>
            </DropdownToggle>
            <DropdownMenu>
                {langs.map((lan) => (
                    <DropdownItem key={lan.value} onClick={() => close(lan.value)}>
                        {lan.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

export default ChangeLang;

