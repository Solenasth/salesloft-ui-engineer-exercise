import React from 'react';
import './EventCard.css';
import { default as VoicemailIcon } from '../../../_starter/shared/Icons/Voicemail';
import { default as PhoneIcon } from '../../../_starter/shared/Icons/Phone';
import { default as BadgeIcon } from '../../../_starter/shared/Icons/Badge';
import { default as PaperPlaneIcon } from '../../../_starter/shared/Icons/PaperPlane';
import { default as ReplyIcon } from '../../../_starter/shared/Icons/Reply';
import { default as RocketIcon } from '../../../_starter/shared/Icons/Rocket';

const EventCard = ({ eventData }) => {
  const getIcon = type => {
    switch (type) {
      case 'voicemail':
        return <VoicemailIcon />;
      case 'call':
        return <PhoneIcon />;
      case 'success':
        return <BadgeIcon />;
      case 'sent_email':
        return <PaperPlaneIcon />;
      case 'email_reply':
        return <ReplyIcon />;
      case 'added_to_cadence':
        return <RocketIcon />;
      default:
        return <VoicemailIcon />;
    }
  };

  const getDate = timsestamp =>
    new Date(timsestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

  const getTime = timsestamp =>
    new Date(timsestamp).toLocaleString('en-US', {
      hour: '2-digit',
      minute: 'numeric'
    });

  return (
    <div className="event-card">
      <div className={`event-icon ${eventData.type}`}>
        <div className="event-icon__background" />
        <div className="event-icon__icon">{getIcon(eventData.type)}</div>
      </div>
      <div className="card-body">
        <div className="card-body__content">
          <h1 className="card-dynamic-title">The convergence is upon us</h1>
          <p className="card-dynamic-content">neptune was mutated</p>
        </div>
        <div className="card-datetime">
          <p className="card-datetime__date">{getDate(eventData.created_at)}</p>
          <p className="card-datetime__time">{getTime(eventData.created_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
