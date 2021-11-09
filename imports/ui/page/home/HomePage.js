import React from 'react';

import Banner from '/imports/ui/components/banner/Banner';
import LinksList from '/imports/ui/components/linksList/linksList';
import Steps from '/imports/ui/components/Steps/Steps';
import Borrow from '/imports/ui/components/borrow/Borrow';
import Stats from '/imports/ui/components/stats/Stats';
import Subscribe from '/imports/ui/components/subscribe/Subscribe';

const HomePage = () => {
    return (
      <div className="home">
        <Banner/>
        <div className="container-center">
          <LinksList/>
          <Steps/>
        </div>
        <Borrow/>
        <div className="stats-container">
          <Stats/>
          <Subscribe/>
        </div>
      </div>
    )
}

export default HomePage;