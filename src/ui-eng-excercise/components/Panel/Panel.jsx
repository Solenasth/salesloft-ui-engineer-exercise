import React from 'react';
import './Panel.css';
import ProfilePanel from '../PanelTypes/ProfilePanel';
import ActivitiesPanel from '../PanelTypes/ActivitiesPanel';
import PlaceholderPanel from '../PanelTypes/PlaceholderPanel';

const Panel = ({ type, ...rest }) => {
  const renderPanelType = panelType => {
    switch (panelType) {
      case 'profile':
        return (
          <ProfilePanel
            name={rest.name}
            title={rest.title}
            company_website={rest.company_website}
            company_name={rest.company_name}
            linkedin_url={rest.linkedin_url}
            twitter_handle={rest.twitter_handle}
            crm_url={rest.crm_url}
            personal_website={rest.personal_website}
          />
        );
      case 'activities':
        return <ActivitiesPanel />;
      default:
        return <PlaceholderPanel />;
    }
  };
  return (
    <div className={`panel ${rest.className ? rest.className : ''}`}>
      {renderPanelType(type)}
    </div>
  );
};

export default Panel;
