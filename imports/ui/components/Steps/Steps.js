import React from "react";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="container steps-block">
        <div className="row f-align-center">
          <div className="col-lg-8">
            <div className="title-box">
              <h2>
                <span>{t('steps.title')}</span>
                {t('steps.sub_title')}
              </h2>
              <p>{t('steps.text')}</p>
            </div>
            <div className="steps-list row">
              <div className="col-lg-4">
                <a href="#" className="item">
                  <span className="ico">
                    <svg width="57" height="45" viewBox="0 0 57 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="4.45833" cy="4.62496" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="16.4583" cy="4.62496" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="28.4583" cy="4.62496" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="40.4583" cy="4.62496" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="52.4583" cy="4.62496" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="4.45833" cy="16.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="16.4583" cy="16.625" rx="2.45833" ry="2.45834" fill="#EB3B3B" stroke="#EB3B3B" stroke-width="3"/>
                      <ellipse cx="28.4583" cy="16.625" rx="2.45833" ry="2.45834" fill="#EB3B3B" stroke="#EB3B3B" stroke-width="3"/>
                      <ellipse cx="40.4583" cy="16.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="52.4583" cy="16.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="4.45833" cy="28.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="16.4583" cy="28.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="28.4583" cy="28.625" rx="2.45833" ry="2.45834" fill="#EB3B3B" stroke="#EB3B3B" stroke-width="3"/>
                      <ellipse cx="40.4583" cy="28.625" rx="2.45833" ry="2.45834" fill="#EB3B3B" stroke="#EB3B3B" stroke-width="3"/>
                      <ellipse cx="52.4583" cy="28.625" rx="2.45833" ry="2.45834" fill="#EB3B3B" stroke="#EB3B3B" stroke-width="3"/>
                      <ellipse cx="4.45833" cy="40.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="16.4583" cy="40.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="28.4583" cy="40.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="40.4583" cy="40.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="52.4583" cy="40.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                    </svg>
                  </span>
                  <span className="text">
                    <span className="title">{t('steps.choose')}</span>
                    <span>{t('steps.choose_text')}</span>
                  </span>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#" className="item">
                  <span className="ico">
                    <svg width="59" height="69" viewBox="0 0 59 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.4585 14.9166H11.6875C12.6249 14.9166 13.4365 15.5677 13.6399 16.4828L15.7502 25.9791M15.7502 25.9791L19.7711 48.0941C20.2898 50.947 22.7746 53.0208 25.6743 53.0208H46.6066C49.408 53.0208 51.8366 51.0823 52.4574 48.3505L57.1254 27.8116C57.3387 26.8729 56.6252 25.9791 55.6627 25.9791H15.7502Z" stroke="#1E2632" stroke-width="3" stroke-linecap="round"/>
                      <ellipse cx="21.8961" cy="61.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <ellipse cx="51.3961" cy="61.625" rx="2.45833" ry="2.45834" stroke="#1E2632" stroke-width="3"/>
                      <path d="M29.5 11.2827L36.5 18L43 11.2827" stroke="#EB3B3B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M36.5 16.5L36.5 9L36.5 1.5" stroke="#EB3B3B" stroke-width="3" stroke-linecap="round"/>
                    </svg>

                  </span>
                  <span className="text">
                    <span className="title">{t('steps.buy')}</span>
                    <span>{t('steps.buy_text')}</span>
                  </span>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#" className="item">
                  <span className="ico">
                    <svg width="68" height="59" viewBox="0 0 68 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50.0758 2H17.9242C17.9242 2 15.8448 17.7355 17.9242 27.4375C20.3873 38.9302 28.6414 43.25 28.6414 43.25V57H39.3586V43.25C39.3586 43.25 47.6127 38.9302 50.0758 27.4375C52.1552 17.7355 50.0758 2 50.0758 2Z" stroke="#1E2632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M51 11.5H64.8321V8.5H51V11.5ZM64.338 10.923L62.1739 24.8095L65.1381 25.2715L67.3023 11.385L64.338 10.923ZM58.5391 28.5428L47.7295 30.5246L48.2705 33.4754L59.08 31.4937L58.5391 28.5428ZM62.1739 24.8095C61.8793 26.7002 60.4212 28.1978 58.5391 28.5428L59.08 31.4937C62.2169 30.9186 64.647 28.4226 65.1381 25.2715L62.1739 24.8095ZM64.8321 11.5C64.5252 11.5 64.2908 11.2262 64.338 10.923L67.3023 11.385C67.5385 9.86908 66.3663 8.5 64.8321 8.5V11.5Z" fill="#1E2632"/>
                      <path d="M17 11.5H3.16792V8.5H17V11.5ZM3.66195 10.923L5.82609 24.8095L2.86187 25.2715L0.697733 11.385L3.66195 10.923ZM9.46094 28.5428L20.2705 30.5246L19.7295 33.4754L8.91996 31.4937L9.46094 28.5428ZM5.82609 24.8095C6.12074 26.7002 7.57882 28.1978 9.46094 28.5428L8.91996 31.4937C5.78308 30.9186 3.35295 28.4226 2.86187 25.2715L5.82609 24.8095ZM3.16792 11.5C3.47475 11.5 3.7092 11.2262 3.66195 10.923L0.697733 11.385C0.461491 9.86908 1.63373 8.5 3.16792 8.5V11.5Z" fill="#1E2632"/>
                      <path d="M17 57H50" stroke="#1E2632" stroke-width="3"/>
                      <path d="M32.9791 17.235V26.642H30.5871V30H39.4191V26.642H36.9811V13.9H30.7941V17.235H32.9791Z" fill="#EB3B3B"/>
                    </svg>
                  </span>
                  <span className="text">
                    <span className="title">{t('steps.win')}</span>
                    <span>{t('steps.win_text')}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 img">
            <img src="./img/img-steps.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
