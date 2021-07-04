import React from 'react';
import Panel from '../Panel/Panel';
import TitleBar from '../TitleBar/TitleBar';

import './PeoplePage.css';

const PeoplePage = (
  {
    /* props */
  }
) => {
  return (
    <div className="page">
      <TitleBar title="People" />
      <div className="page-layout">
        <Panel className="page__panel" />
        <Panel className="page__panel" />
        <Panel className="page__panel" />
        <Panel className="page__panel" />
      </div>
    </div>
  );
};

export default PeoplePage;
