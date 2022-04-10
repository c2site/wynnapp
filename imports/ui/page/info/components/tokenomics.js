import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from "react-i18next";


const data = {
  //labels: [],
  datasets: [
    {
      data: [2, 2, 4, 2, 15, 4, 15, 10, 30, 3,3,10],
      backgroundColor: [

        '#CB2F2F',
        '#D13C3C',
        '#DD4949',
        '#ED5D5D',
        '#F87272',
        '#F89272',
        '#F8AA72',
          '#F8C272',
          '#C49828',
          '#D5AD47',
          '#D5AD47',
          '#E9C25D',
          '#F8D270'

      ],
      borderColor: [
        '#CB2F2F',
        '#D13C3C',
        '#DD4949',
        '#ED5D5D',
        '#F87272',
        '#F89272',
        '#F8AA72',
        '#F8C272',
        '#C49828',
        '#D5AD47',
        '#D5AD47',
        '#E9C25D',
        '#F8D270'

      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    tooltip: {
      callbacks: {
      //   title: function () {
      //     return "my tittle";
      //   },
        label: function (item, data) {
          return `${item.formattedValue}%`;
        }
      }
    },
    legend: { display: false },
  }
}


const Tokenomics = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="container tokenomics-block">
        <h2 className="text-center">{t('info.tokenomics.title')}</h2>
        <div className="row f-align-center">
          <div className="col-lg-4">
            <div className="diagram">
              <img src="./img/info-logo.svg" alt="" />
              <Doughnut data={data} options={options}/>
            </div>
            <div className="list-percent">
              <div className="item">
                <span className="percent">
                  <span className="color-7"></span>
                  3%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text20')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text120')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-1"></span>
                  3%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text21')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text121')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-2"></span>
                  10%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text22')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text122')}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="list-percent">
              <div className="item">
                <span className="percent">
                  <span className="color-7"></span>
                  2%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text1')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text8')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-1"></span>
                  2%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text2')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text12')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-2"></span>
                  4%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text3')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text13')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-3"></span>
                  2%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text4')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text14')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-4"></span>
                  15%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text5')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text15')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-5"></span>
                  4%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text6')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text16')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-6"></span>
                  15%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text7')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text17')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-5"></span>
                  10%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text8')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text18')}</small>
                </div>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-6"></span>
                  30%
                </span>
                <div className="test">
                  <span className="text"> - {t('info.tokenomics.token_text.text9')}</span>
                  <small className="sub-text"> - {t('info.tokenomics.token_text.text19')}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="token-info">
              <h5>{t('info.tokenomics.title2')}</h5>
              <div className="list">
                <div className="item">
                  <span>{t('info.tokenomics.info1')}: <strong>WYNN</strong></span>
                </div>
                <div className="item">
                  <span>{t('info.tokenomics.info2')}: <strong>{t('info.tokenomics.token')}</strong></span>
                </div>
                <div className="item">
                  <span>{t('info.tokenomics.info3')}: <strong>Binance Smart Chain</strong></span>
                </div>
                <div className="item">
                  <span>{t('info.tokenomics.info4')}: <strong>BEP20</strong></span>
                </div>
                <div className="item">
                  <span>{t('info.tokenomics.info5')}: <strong>50 000 000 {t('info.tokenomics.tokens')}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="token-text">*/}
        {/*  <div className="row">*/}
        {/*    <div className="col-lg-8">*/}
        {/*      <h5>{t('info.tokenomics.title3')}</h5>*/}
        {/*      <p>{t('info.tokenomics.text')}</p>*/}
        {/*      <div className="list">*/}
        {/*        <p>10% {t('info.tokenomics.or')} <strong>5 000 000 WYNN</strong> – {t('info.tokenomics.token_text.text1')}</p>*/}
        {/*        <p>15% {t('info.tokenomics.or')} <strong>7 500 000 WYNN</strong> – {t('info.tokenomics.token_text.text2')}</p>*/}
        {/*        <p>10% {t('info.tokenomics.or')} <strong>5 000 000 WYNN</strong> – {t('info.tokenomics.token_text.text3')}</p>*/}
        {/*        <p>15% {t('info.tokenomics.or')} <strong>7 500 000 WYNN</strong> – {t('info.tokenomics.token_text.text4')}</p>*/}
        {/*        <p>10% {t('info.tokenomics.or')} <strong>5 000 000 WYNN</strong> – {t('info.tokenomics.token_text.text5')}</p>*/}
        {/*        <p>25% {t('info.tokenomics.or')} <strong>12 500 000 WYNN</strong> – {t('info.tokenomics.token_text.text6')}</p>*/}
        {/*        <p>15% {t('info.tokenomics.or')} <strong>7 500 000 WYNN</strong> – {t('info.tokenomics.token_text.text7')}</p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="col-lg-4 img">*/}
        {/*      <img src="./img/img-info-text.svg" alt="" />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Tokenomics;
