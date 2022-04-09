import React from "react";
import { useTranslation } from "react-i18next";

const roadmap = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="container roadmap">
                <h2 className="text-center">{t('info.roadmap.title')}</h2>
                <div className="info-check">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        {t('info.roadmap.complete')}
                    </span>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                            <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                            <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                            <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                            <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                        </svg>
                        {t('info.roadmap.underway')}
                    </span>
                    <span>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                            <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        {t('info.roadmap.planning')}
                    </span>
                </div>
                <div className="roadmap-list">
                    <div className="item-holder">
                        <div className="item">
                            <div className="head">
                                <span>{t('info.roadmap.list1.name')}</span>
                            </div>
                            <div className="body">
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list1.text1')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list1.text2')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list1.text3')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list1.text4')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list1.text5')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list1.text6')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list1.text7')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list1.text8')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list1.text9')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-holder">
                        <div className="item">
                            <div className="head">
                                <span>{t('info.roadmap.list2.name')}</span>
                            </div>
                            <div className="body">
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text1')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text2')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text3')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text4')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text5')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                                        <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text6')}</span>
                                </div>
                                <div className="box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text7')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text10')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text8')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list2.text9')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-holder">
                        <div className="item">
                            <div className="head">
                                <span>{t('info.roadmap.list3.name')}</span>
                            </div>
                            <div className="body">
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list3.text1')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list3.text7')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list3.text2')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list3.text3')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list3.text4')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list3.text5')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list3.text6')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-holder">
                        <div className="item">
                            <div className="head">
                                <span>{t('info.roadmap.list4.name')}</span>
                            </div>
                            <div className="body">
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list4.text1')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list4.text2')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list4.text3')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list4.text4')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list4.text5')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-holder">
                        <div className="item">
                            <div className="head">
                                <span>{t('info.roadmap.list5.name')}</span>
                            </div>
                            <div className="body">
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list5.text1')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list5.text2')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list5.text3')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list5.text4')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list5.text5')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list5.text6')}</span>
                                </div>
                                <div className="box">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                        <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{t('info.roadmap.list5.text7')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default roadmap;
