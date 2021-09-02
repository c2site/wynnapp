import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const App = ({Page}) => (
  <>
    <Header />
    <div className={'page'}>
      <Page />
    </div>
    <Footer />
  </>
);
