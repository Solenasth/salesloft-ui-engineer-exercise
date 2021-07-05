import React from 'react';
import './ActivityFeedTab.css';
import { default as ChevronSmDownIcon } from '../../../../_starter/shared/Icons/ChevronSmDown';
import { default as PhoneIcon } from '../../../../_starter/shared/Icons/Phone';
import { default as PlusIcon } from '../../../../_starter/shared/Icons/Plus';
import EventCard from '../../EventCard';

// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//       setPosts(data);
//     });
// }, []);

const ActivityFeedTab = ({ activities, upcoming_activities }) => {
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
      <div className="upcoming-activities">
        <h1 className="upcoming-activities__title">Upcoming Activities</h1>
        <p className="upcoming-activities__empty-text">
          Once actions are scheduled, they’ll appear here
        </p>
      </div>
      <div className="past-activities">
        <h1 className="past-activities__title">Past Activities</h1>
        {/* the mocks don't include a text for an empty list, but i wanted to include it for consistency */}
        <p className="past-activities__empty-text">
          Once actions are done, they’ll appear here
        </p>
        <EventCard />
      </div>
    </div>
  );
};

export default ActivityFeedTab;
