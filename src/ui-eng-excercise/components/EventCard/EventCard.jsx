import React from 'react';
import './EventCard.css';
import { default as PhoneIcon } from '../../../_starter/shared/Icons/Phone';

const EventCard = () => {
  return (
    <div className="event-card">
      <div className="event-card__icon">
        <PhoneIcon />
      </div>
      <div className="card-body">
        <div className="card-body__content">
          <h1 className="card-dynamic-title">The convergence is upon us</h1>
          <p className="card-dynamic-content">neptune was mutated</p>
        </div>
        <div className="card-datetime">
          <p className="card-datetime__date">Apr 7, 20219</p>
          <p className="card-datetime__time">08:39 am</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
