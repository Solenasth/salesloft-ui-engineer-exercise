import React from 'react';
import Panel from '../Panel/Panel';
import TitleBar from '../TitleBar/TitleBar';

import './PeoplePage.css';

const PeoplePage = ({ payload }) => {
  return (
    <div className="page">
      <TitleBar title="People" />
      <div className="page-layout">
        <Panel
          type="profile"
          name={payload.display_name}
          title={payload.title}
          company_name={payload.person_company_name}
          company_website={payload.person_company_website}
          linkedin_url={payload.linkedin_url}
          twitter_handle={payload.twitter_handle}
          crm_url={payload.crm_url}
          personal_website={payload.personal_website}
        />
        <Panel type="activities" className="page-layout__main-panel" />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
      </div>
    </div>
  );
};

export default PeoplePage;
