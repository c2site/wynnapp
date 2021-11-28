import React from "react";
import {useTranslation} from "react-i18next";


const FaqPage = () => {
    const {t, i18n} = useTranslation();
    return (


                    <div className="inner-page">
                        <div className="container head-page">
                            <div className="breadcrumbs">
                                <span className="name">{t('nav.home')}</span>
                                <span className="separator">
                              <img src="./img/arrow-breadcrumbs.svg" alt="" />
                            </span>
                                <span className="name">{t('nav.faq')}</span>
                            </div>
                        </div>
                        <div className="container faq-box">
                            <div>
                                <div>
                                    <h2 className="title-page">{t('nav.faq')}</h2>
                                </div>
                                <div className="unit" id="about">
                                    <div>
                                        <h3 className="faq-title">{t('faq.title')}</h3>
                                    </div>
                                    <div className="faq-container">
                                        <details open>
                                            <summary><span>{t('faq.faq-about.question-1')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-about.answer-1')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-about.question-2')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-about.answer-2')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-about.question-3')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-about.answer-3')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-about.question-4')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-about.answer-4')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-about.question-5')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-about.answer-5')}</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                                <div className="unit" id="tech">
                                    <div>
                                        <h3 className="faq-title">{t('faq.title-2')}</h3>
                                    </div>
                                    <div className="faq-container">
                                        <details>
                                            <summary><span>{t('faq.faq-tech.question-1')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-1')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-tech.question-2')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-2')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-tech.question-3')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-3')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-tech.question-4')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-4')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-tech.question-5')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-5')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-tech.question-6')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-6')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-tech.question-7')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-7')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-tech.question-8')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-8')}</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                                <div className="unit" id="soc">
                                    <div>
                                        <h3 className="faq-title">{t('faq.title-3')}</h3>
                                    </div>
                                    <div className="faq-container">
                                        <details>
                                            <summary><span>{t('faq.faq-soc.question-1')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-1')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-soc.question-2')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-2')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-soc.question-3')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-tech.answer-3')}</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                                <div className="unit" id="ref">
                                    <div>
                                        <h3 className="faq-title">{t('faq.title-4')}</h3>
                                    </div>
                                    <div className="faq-container">
                                        <details>
                                            <summary><span>{t('faq.faq-ref.question-1')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-ref.answer-1')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-ref.question-2')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-ref.answer-2')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-ref.question-3')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-ref.answer-3')}</p>
                                            </div>
                                        </details>
                                        <details>
                                            <summary><span>{t('faq.faq-ref.question-4')}</span></summary>
                                            <div className="answer">
                                                <p>{t('faq.faq-ref.answer-4')}</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


    )
}

export default FaqPage;