import React from 'react';
import './ActivitiesPanel.css';
import Tabs from '../../Tabs';
import Tab from '../../Tab';

const ActivitiesPanel = ({ payload }) => {
  return (
    <>
      <div className="activities-panel">
        <Tabs>
          <Tab
            tabType="activityFeed"
            title="Activity"
            activities={payload.activities}
            upcoming_activities={payload.upcoming_activities}
            display_name={payload.display_name}
          ></Tab>
          <Tab title="Tracking"></Tab>
          <Tab tabType="activityFeed" title="Reminders"></Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ActivitiesPanel;
