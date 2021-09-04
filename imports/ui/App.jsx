import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
