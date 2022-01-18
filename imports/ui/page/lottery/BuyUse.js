import React from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useTranslation} from "react-i18next";
import useBalance from "../../components/wallet/balance";
import {useWeb3React} from "@web3-react/core";
import Login from "../../components/header/components/Login";

const BuyUse = ({numbers}) => {
    const {t, i18n} = useTranslation();
    const {active} = useWeb3React();
    const [balance] = useBalance();
    return (
        <>
            <div className="ticket-balance">
                <form className="contain-balance">
                    <h3>{t('buy.balance')}</h3>
                    <div className="balance-info">
                        <div className="form-control item">
                            {active && (
                                <Dropdown className="lang-drop drop-red" >
                                    <DropdownToggle tag={'a'} data-toggle="dropdown">
                                        {balance} WYNN
                                    </DropdownToggle>
                                </Dropdown>
                            )}
                        </div>
                    </div>
                    {!active ? (<Login />) : (
                        <button type="submit" className="btn btn-black">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M1.5 9.17071H0.5V9.87788L1.16675 10.1135L1.5 9.17071ZM1.5 14.8293L1.16675 13.8865L0.5 14.1221V14.8293H1.5ZM23.5 14.8293H24.5V14.1221L23.8332 13.8865L23.5 14.8293ZM23.5 9.17071L23.8332 10.1135L24.5 9.87788V9.17071H23.5ZM2.5 6C2.5 5.44772 2.94772 5 3.5 5V3C1.84315 3 0.5 4.34315 0.5 6H2.5ZM2.5 9.17071V6H0.5V9.17071H2.5ZM4.5 12C4.5 10.2568 3.38549 8.7765 1.83325 8.22787L1.16675 10.1135C1.9449 10.3886 2.5 11.1307 2.5 12H4.5ZM1.83325 15.7721C3.38549 15.2235 4.5 13.7432 4.5 12H2.5C2.5 12.8693 1.9449 13.6114 1.16675 13.8865L1.83325 15.7721ZM2.5 18V14.8293H0.5V18H2.5ZM3.5 19C2.94772 19 2.5 18.5523 2.5 18H0.5C0.5 19.6569 1.84314 21 3.5 21V19ZM21.5 19H3.5V21H21.5V19ZM22.5 18C22.5 18.5523 22.0523 19 21.5 19V21C23.1569 21 24.5 19.6569 24.5 18H22.5ZM22.5 14.8293V18H24.5V14.8293H22.5ZM20.5 12C20.5 13.7432 21.6145 15.2235 23.1668 15.7721L23.8332 13.8865C23.0551 13.6114 22.5 12.8693 22.5 12H20.5ZM23.1668 8.22787C21.6145 8.7765 20.5 10.2568 20.5 12H22.5C22.5 11.1308 23.0551 10.3886 23.8332 10.1135L23.1668 8.22787ZM22.5 6V9.17071H24.5V6H22.5ZM21.5 5C22.0523 5 22.5 5.44771 22.5 6H24.5C24.5 4.34315 23.1569 3 21.5 3V5ZM3.5 5H21.5V3H3.5V5Z" fill="white"/>
                                    <path d="M15.5 4V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.5 11V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.5 18V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            {t('buy.btn')}
                        </button>
                    )}

                </form>
            </div>
        </>
    )
}

export default BuyUse;