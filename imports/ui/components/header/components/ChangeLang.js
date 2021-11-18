import React, {useEffect, useState} from "react";

import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import i18n from "i18next";
import {toast} from "react-toastify";
import {useCurrentUser, useSubscribe} from "/imports/api/hooks";
import { useTracker } from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";




const ChangeLang = ({mobile}) => {
    useSubscribe('user.one')
    const [isOpen, setOpen] = useState(false);
    const locale = useTracker(()=>Meteor.user()?.settings?.lang || i18n.language);
    const toggle = () => setOpen((prevState) => !prevState);
    const [value,setValue] = useState();
    const langs = [
        { value: 'cn', label: '中文' },
        { value: 'en', label: 'English' },
    ];
    const val = (value) => {
        for (let i = 0; i < langs.length; i++) {
            if (langs[i]['value'] === value) {
                return setValue(langs[i].label);
            }
        }
        return setValue(-1);
    }



    useEffect(()=> {
        val(locale)
    }, [locale]);


    const close = (lang) => {
        i18n.changeLanguage(lang);
        if(Meteor.loggingIn()) {
            Meteor.call('user.locale', lang, (err)=> {
                toast.error(err.reason);
            })
        }

        //setLocale(i18n.language)
        setOpen(!isOpen);
        toggle()
    };



    return (
        <Dropdown className="lang-drop" isOpen={isOpen} toggle={toggle}>
            <DropdownToggle mobile={mobile} tag={'a'} data-toggle="dropdown" aria-expanded={isOpen}>
                <img src={`/img/flag-${locale}.png`} alt="" />
                <span>{value}</span>
            </DropdownToggle>
            <DropdownMenu>
                {langs.map((lan) => (
                    <DropdownItem key={lan.value} onClick={() => close(lan.value)}>
                        <img src={`/img/flag-${lan.value}.png`} alt="" />
                        <span>{lan.label}</span>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

export default ChangeLang;

