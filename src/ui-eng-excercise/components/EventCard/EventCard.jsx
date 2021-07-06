import React from 'react';
import './EventCard.css';
import { default as VoicemailIcon } from '../../../_starter/shared/Icons/Voicemail';
import { default as PhoneIcon } from '../../../_starter/shared/Icons/Phone';
import { default as BadgeIcon } from '../../../_starter/shared/Icons/Badge';
import { default as PaperPlaneIcon } from '../../../_starter/shared/Icons/PaperPlane';
import { default as ReplyIcon } from '../../../_starter/shared/Icons/Reply';
import { default as RocketIcon } from '../../../_starter/shared/Icons/Rocket';
import { default as EyeIcon } from '../../../_starter/shared/Icons/Eye';
import { default as ClickIcon } from '../../../_starter/shared/Icons/Click';

const EventCard = ({ eventData, display_name }) => {
  const { type, created_at, static_data, dynamic_data } = eventData;

  const parseMinutes = minutes => {
    let hours = minutes / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours}:${rminutes}`;
  };

  const getInteractionCounts = ({ views, clicks, replies }) => {
    return (
      <>
        <span className="card-dynamic-counts">
          <span className="card-dynamic-counts__views">
            <EyeIcon />
            {views}
          </span>
          <span className="card-dynamic-counts__clicks">
            <ClickIcon />
            {clicks}
          </span>
          <span className="card-dynamic-counts__replies">
            <ReplyIcon />
            {replies}
          </span>
        </span>
      </>
    );
  };

  const getDynamicContent = (type, static_data, dynamic_data, display_name) => {
    switch (type) {
      case 'voicemail':
        return <span>{`${display_name} to ${dynamic_data.user_name}`}</span>;
      case 'success':
        return <span>{dynamic_data.user_name}</span>;
      case 'sent_email':
      case 'email_reply':
        return (
          <>
            <span>{dynamic_data.user_name}</span>
            <span>|</span>
            {getInteractionCounts(dynamic_data.counts)}
          </>
        );
      case 'call':
        return (
          <span>{`${display_name} with ${dynamic_data.phone_number}`}</span>
        );
      case 'added_to_cadence':
        return (
          <>
            <span>{`Added by ${static_data.instigator.action_caller_name} | Assigned to ${dynamic_data.user_name}`}</span>
          </>
        );
      default:
        return 'content not available';
    }
  };

  const getDynamicTitle = (type, static_data, dynamic_data) => {
    switch (type) {
      case 'voicemail':
        return (
          <>
            <span className="card-dynamic-title--bold">
              Voicemail Received{' '}
            </span>
            <span>{parseMinutes(dynamic_data.voicemail_duration)}</span>
          </>
        );
      case 'call':
        return (
          <span className="card-dynamic-title--bold">
            {static_data.sentiment}
          </span>
        );
      case 'success':
        return (
          <span className="card-dynamic-title--bold">Marked as Success</span>
        );
      case 'sent_email':
        return (
          <span className="card-dynamic-title--highlight">
            {static_data.subject}
          </span>
        );
      case 'email_reply':
        return (
          <>
            <span className="card-dynamic-title--highlight">
              {`RE: ${static_data.in_reply_to_subject} `}
            </span>
            <span>{static_data.body}</span>
          </>
        );
      case 'added_to_cadence':
        return (
          <>
            <span className="card-dynamic-title--bold">Added to Cadence </span>
            <span className="card-dynamic-title--highlight">
              {dynamic_data.cadence_name}
            </span>
          </>
        );
      default:
        return 'title not available';
    }
  };

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

  /* in a more complete implementation, we would use some other tool to also deal with timezones
  something like moment.js, and have them reacted to the user's timezone.
  since this is basically a mockup i decided that the vanilla tools are Enough. 
  but it's definetly in the list for improvements */

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
      <div className={`event-icon ${type}`}>
        <div className="event-icon__background" />
        <div className="event-icon__icon">{getIcon(type)}</div>
      </div>
      <div className="card-body">
        <div className="card-body__content">
          <h1 className="card-dynamic-title">
            {getDynamicTitle(type, static_data, dynamic_data)}
          </h1>
          <p className="card-dynamic-content">
            {getDynamicContent(type, static_data, dynamic_data, display_name)}
          </p>
        </div>
        <div className="card-datetime">
          <p className="card-datetime__date">{getDate(created_at)}</p>
          <p className="card-datetime__time">{getTime(created_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
