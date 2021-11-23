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
import "./style/components/banner/banner.scss";
import "./style/components/banner/nextDraw.scss";
import "./style/components/linksList/linksList.scss";
import "./style/components/steps/steps.scss";
import "./style/components/borrow/borrow.scss";
import "./style/components/stats/stats.scss";
import "./style/components/subscribe/subscribe.scss";
import './style/components/ticket/ticket.scss';
import './style/components/tokenomics/tokenomics.scss';
import './style/components/roadmap/roadmap.scss';
import './style/components/team/team.scss';
import "./style/page/profile.scss";
import "./style/page/history.scss";
import "./style/page/faq.scss";
import '../api/i18n';

export const App = ({Page}) => (
  <>
    <Header />
    <div className={'page'}>
      <Page />
    </div>
    <Footer />
    <ToastContainer />
  </>
);
