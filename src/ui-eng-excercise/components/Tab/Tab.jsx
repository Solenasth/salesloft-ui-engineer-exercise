import React from 'react';
import './Tab.css';
import ActivityFeedTab from '../TabTypes/ActivityFeedTab';
import PlaceholderTab from '../TabTypes/PlaceholderTab';

const Tab = ({ tabType, title, ...rest }) => {
  const renderTabType = type => {
    switch (type) {
      case 'activityFeed':
        return (
          <ActivityFeedTab
            activities={rest.activities}
            upcoming_activities={rest.upcoming_activities}
          />
        );
      default:
        return <PlaceholderTab />;
    }
  };
  return renderTabType(tabType);
};

export default Tab;
