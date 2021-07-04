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
          />
        );
      case 'activities':
        return <ActivitiesPanel />;
      default:
        return <PlaceholderPanel />;
    }
  };
  return <div className="panel">{renderPanelType(type)}</div>;
};

export default Panel;
