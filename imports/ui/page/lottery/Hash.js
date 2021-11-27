import React from 'react';
import { useTranslation } from "react-i18next";


const Hash = () => {
  const {t, i18n} = useTranslation();

    return (
      <div className="history-page inner-page">
        <div className="container">
          <div className="head-page">
            <div className="breadcrumbs">
              <span className="name">{t('nav.home')}</span>
              <span className="separator">
                <img src="./img/arrow-breadcrumbs.svg" alt="" />
              </span>
              <span className="name">{t('nav.check')}</span>
            </div>
            <h2 className="title-page">{t('hash.title')}</h2>
          </div>
          <div className="table history-table history-hash">
            <form action="#" className="form form-hash">
              <label >{t('hash.label')}</label>
              <div className="flex">
                <input type="text" name="" id="" />
                <button className="btn btn-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2832 5L21.0003 12L14.2832 19" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="19.7324" y1="12.0317" x2="3.99936" y2="12.0317" stroke="#1E2632" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
            </form>
            <div className="hash-btn">
              <button className="btn btn-active">{t('hash.btn1')}</button>
              <button className="btn btn-default">{t('hash.btn2')}</button>
            </div>
            <div className="scroll-hash">
              <div className="table-hash">
                <div className="table-head">
                  <table>
                    <thead>
                    <tr>
                      <th>{t('hash.game')}</th>
                      {/*<th>tickets</th>*/}
                      <th>{t('hash.win')}</th>
                      {/*<th>win amount</th>*/}
                      <th>{t('hash.label')}</th>
                    </tr>
                    </thead>
                  </table>
                </div>
                <table>
                  <tbody>
                  <tr>
                    <td>№1055</td>
                    {/*<td>12</td>*/}
                    <td>
                      <div className="numbers">
                        <span className="number">10</span>
                        <span className="number">10</span>
                        <span className="number">10</span>
                        <span className="number">10</span>
                        <span className="number">10</span>
                      </div>
                    </td>
                    {/*<td className='green'>24500 WYNN</td>*/}
                    <td>1aa2793c984e484a12f249fbc331ece54b33f50020d40075bbbdecc2422edfab</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hash;