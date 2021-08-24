import React from 'react';

export const App = ({Page}) => (
  <>
    <div className={'header'}>
      Header
    </div>
    <div className={'page'}>
      <Page />
    </div>
    <div className={'footer'}>
      Footer
    </div>
  </>
);
