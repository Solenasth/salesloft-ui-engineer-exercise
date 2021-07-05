import React from 'react';
import './ActivityFeedTab.css';
import { default as ChevronSmDownIcon } from '../../../../_starter/shared/Icons/ChevronSmDown';
import { default as PhoneIcon } from '../../../../_starter/shared/Icons/Phone';
import { default as PlusIcon } from '../../../../_starter/shared/Icons/Plus';

const ActivityFeedTab = () => {
  return (
    <div className="activity-feed">
      <div className="activity-feed__top-buttons">
        <div className="left-buttons">
          <button className="activity-feed-button activity-feed-button--person">
            <span>Person</span>
            <ChevronSmDownIcon />
          </button>
          <button className="activity-feed-button activity-feed-button--activity">
            <span>Activity</span>
            <ChevronSmDownIcon />
          </button>
        </div>
        <div className="right-buttons">
          <button className="activity-feed-secondary-button">
            <span className="activity-feed-secondary-button__phoneicon">
              <PhoneIcon />
            </span>
            <span>Log a Call</span>
          </button>
          <button className="activity-feed-secondary-button">
            <span className="activity-feed-secondary-button__plusicon">
              <PlusIcon />
            </span>
            <span>Add a Note</span>
          </button>
        </div>
      </div>
      <div className="activity-feed__upcoming-activities">
        <h1>Upcoming Activities</h1>
        <p>Once actions are scheduled, they’ll appear here</p>
      </div>
      <div className="activity-feed__past-activities">
        <h1>Past Activities</h1>
      </div>
    </div>
  );
};

export default ActivityFeedTab;
