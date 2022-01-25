import React from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import "./fonts/Intro";
import "./style/utils/normalize.scss";
import "./style/_helpers/variables.scss";
import "./style/_helpers/general.scss";
import "./style/utils/icons-style/icons-style.scss";
import "./style/utils/button/button.scss";
import "./style/utils/popup/popup.scss";
import "./style/utils/table/table.scss";
import "./style/utils/form/form.scss";
import "./style/utils/notification/notification.scss";
import "./style/components/footer/footer.scss";
import "./style/components/header/header.scss";
import "./style/page/innerPage.scss";
import "./style/page/home.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/components/banner/banner.scss";
import "./style/components/banner/nextDraw.scss";
import "./style/components/linksList/linksList.scss";
import "./style/components/steps/steps.scss";
import "./style/components/borrow/borrow.scss";
import "./style/components/stats/stats.scss";
import "./style/components/partners/partners.scss";
import "./style/components/subscribe/subscribe.scss";
import './style/components/ticket/ticket.scss';
import './style/components/tokenomics/tokenomics.scss';
import './style/components/roadmap/roadmap.scss';
import './style/components/team/team.scss';
import "./style/page/profile.scss";
import "./style/page/history.scss";
import "./style/page/faq.scss";
import "./style/page/rustPage.scss";
import "./style/page/presale.scss";
import '../api/i18n';

import {Web3ReactProvider} from "@web3-react/core";
import Web3 from "web3";

function getLibrary (provider) {
    const library = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    library.pollingInterval = 12000;
    return library;
}

export const App = ({Page}) => (
  <>
    <Web3ReactProvider getLibrary={getLibrary} >
        <Header />
        <div className={'page'}>
            <Page />
        </div>
        <Footer />
    </Web3ReactProvider>
      <ToastContainer />
  </>
);
