import React, { useState, useEffect } from 'react';
import './ActivityFeedTab.css';
import { default as ChevronSmDownIcon } from '../../../../_starter/shared/Icons/ChevronSmDown';
import { default as PhoneIcon } from '../../../../_starter/shared/Icons/Phone';
import { default as PlusIcon } from '../../../../_starter/shared/Icons/Plus';
import EventCard from '../../EventCard';

const ActivityFeedTab = ({ activities, upcoming_activities, display_name }) => {
  const [activitiesData, setActivitiesData] = useState([]);
  const [upcomingActivitiesData, setUpcomingActivitiesData] = useState([]);

  //fetch activities
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(activities._href);
      const activitiesData = await response.json();
      return activitiesData.data;
    };
    if (activities && activities._href)
      fetchData().then(activitiesData => setActivitiesData(activitiesData));
  }, [activities]);

  //fetch upcoming activitites
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(upcoming_activities._href);
      const upcomingActivitiesData = await response.json();
      return upcomingActivitiesData.data;
    };
    if (upcoming_activities && upcoming_activities._href)
      fetchData().then(upcomingActivitiesData =>
        setUpcomingActivitiesData(upcomingActivitiesData)
      );
  }, [upcoming_activities]);

  const renderPastActivitites = activities =>
    activities.map(activity => (
      <EventCard eventData={activity} display_name={display_name} />
    ));

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
        {!upcomingActivitiesData.length && (
          <p className="upcoming-activities__empty-text">
            Once actions are scheduled, they’ll appear here
          </p>
        )}
        {upcomingActivitiesData && upcomingActivitiesData.length ? (
          renderPastActivitites(upcomingActivitiesData)
        ) : (
          <></>
        )}
      </div>
      <div className="past-activities">
        <h1 className="past-activities__title">Past Activities</h1>
        {/* the mocks don't include a text for an empty list, but i wanted to include it for consistency */}
        {!activitiesData.length && (
          <p className="past-activities__empty-text">
            Once actions are done, they’ll appear here
          </p>
        )}
        {activitiesData && activitiesData.length ? (
          renderPastActivitites(activitiesData)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ActivityFeedTab;
