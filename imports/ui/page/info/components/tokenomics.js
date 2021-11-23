import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from "react-i18next";


const data = {
  //labels: [],
  datasets: [
    {
      data: [6, 15, 15, 20, 10, 34],
      backgroundColor: [
        '#D94848',
        '#E65757',
        '#E8922D',
        '#F5AB54',
        '#FFBC6D',
        '#F8D270',
      ],
      borderColor: [
        '#D94848',
        '#E65757',
        '#E8922D',
        '#F5AB54',
        '#FFBC6D',
        '#F8D270',
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
          </div>
          <div className="col-lg-4">
            <div className="list-percent">
              <div className="item">
                <span className="percent">
                  <span className="color-1"></span>
                  6%
                </span>
                <span className="text"> - {t('info.tokenomics.percent.text1')}</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-2"></span>
                  15%
                </span>
                <span className="text"> - {t('info.tokenomics.percent.text2')}</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-3"></span>
                  15%
                </span>
                <span className="text"> - {t('info.tokenomics.percent.text3')}</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-4"></span>
                  20%
                </span>
                <span className="text"> - {t('info.tokenomics.percent.text4')}</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-5"></span>
                  10%
                </span>
                <span className="text"> - {t('info.tokenomics.percent.text5')}</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-6"></span>
                  34%
                </span>
                <span className="text"> - {t('info.tokenomics.percent.text6')}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="token-info">
              <h5>{t('info.tokenomics.title2')}</h5>
              <div className="list">
                <div className="item">
                  <span>{t('info.tokenomics.info1')}: <strong>Wynn</strong></span>
                </div>
                <div className="item">
                  <span>{t('info.tokenomics.info2')}: <strong>{t('info.tokenomics.token')}</strong></span>
                </div>
                <div className="item">
                  <span>{t('info.tokenomics.info3')}: <strong>Tron</strong></span>
                </div>
                <div className="item">
                  <span>{t('info.tokenomics.info4')}: <strong>TRC-20</strong></span>
                </div>
                <div className="item">
                  <span>{t('info.tokenomics.info5')}: <strong>50 000 000 {t('info.tokenomics.tokens')}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="token-text">
          <div className="row">
            <div className="col-lg-8">
              <h5>{t('info.tokenomics.title3')}</h5>
              <p>{t('info.tokenomics.text')}</p>
              <div className="list">
                <p>6% {t('info.tokenomics.or')} <strong>3 000 000 Wynn</strong> – {t('info.tokenomics.token_text.text1')}</p>
                <p>15% {t('info.tokenomics.or')} <strong>7 500 000 Wynn</strong> – {t('info.tokenomics.token_text.text2')}</p>
                <p>15% {t('info.tokenomics.or')} <strong>7 500 000 Wynn</strong> – {t('info.tokenomics.token_text.text3')}</p>
                <p>20% {t('info.tokenomics.or')} <strong>10 000 000 Wynn</strong> – {t('info.tokenomics.token_text.text4')}</p>
                <p>10% {t('info.tokenomics.or')} <strong>5 000 000 Wynn</strong> – {t('info.tokenomics.token_text.text5')}</p>
                <p>34% {t('info.tokenomics.or')} <strong>17 000 000 Wynn</strong> – {t('info.tokenomics.token_text.text6')}</p>
              </div>
            </div>
            <div className="col-lg-4 img">
              <img src="./img/img-info-text.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
