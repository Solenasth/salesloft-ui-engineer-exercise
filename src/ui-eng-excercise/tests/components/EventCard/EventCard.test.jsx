import * as React from 'react';
import { render } from '@testing-library/react';
import EventCard from '../../../components/EventCard';
import {
  INVALID_EVENT,
  VOICEMAIL_EVENT,
  SUCCESS_EVENT,
  SENT_EMAIL_EVENT,
  EMAIL_REPLY_EVENT,
  CALL_EVENT,
  ADDED_TO_CADENCE_EVENT
} from './EventCardProps__mock__';

//invalid event
describe('EventCard, when am invalid event is received', () => {
  test('renders a visible eventcard', () => {
    render(<EventCard eventData={INVALID_EVENT} />);
    const panel = document.getElementsByClassName('event-card')[0];
    expect(panel).toBeVisible();
  });

  test('sets the correct icon', () => {
    render(<EventCard eventData={INVALID_EVENT} />);
    const icon = document.getElementsByClassName(
      `event-icon ${INVALID_EVENT.type}`
    )[0];
    expect(icon).toBeVisible();
  });

  test('sets the correct title', () => {
    render(<EventCard eventData={INVALID_EVENT} />);
    const dynamicTitle = document.getElementsByClassName(
      'card-dynamic-title'
    )[0];
    expect(dynamicTitle).toHaveTextContent('title not available');
  });

  test('sets the correct content', () => {
    render(<EventCard eventData={INVALID_EVENT} />);
    const dynamicContent = document.getElementsByClassName(
      'card-dynamic-content'
    )[0];
    expect(dynamicContent).toHaveTextContent(`content not available`);
  });
});

//voicemail event
describe('EventCard, when a voicemail event is received', () => {
  test('renders a visible eventcard', () => {
    render(<EventCard eventData={VOICEMAIL_EVENT} />);
    const panel = document.getElementsByClassName('event-card')[0];
    expect(panel).toBeVisible();
  });

  test('sets the correct icon', () => {
    render(<EventCard eventData={VOICEMAIL_EVENT} />);
    const icon = document.getElementsByClassName('event-icon voicemail')[0];
    expect(icon).toBeVisible();
  });

  test('sets the correct title', () => {
    render(<EventCard eventData={VOICEMAIL_EVENT} />);
    const dynamicTitle = document.getElementsByClassName(
      'card-dynamic-title'
    )[0];
    expect(dynamicTitle).toHaveTextContent('Voicemail Received');
  });

  test('sets the correct content', () => {
    let mock_display_name = 'Doc Mitchell';
    render(
      <EventCard eventData={VOICEMAIL_EVENT} display_name={mock_display_name} />
    );
    const dynamicContent = document.getElementsByClassName(
      'card-dynamic-content'
    )[0];
    expect(dynamicContent).toHaveTextContent(
      `${mock_display_name} to ${VOICEMAIL_EVENT.dynamic_data.user_name}`
    );
  });
});

//success event
describe('EventCard, when a success event is received', () => {
  test('renders a visible eventcard', () => {
    render(<EventCard eventData={SUCCESS_EVENT} />);
    const panel = document.getElementsByClassName('event-card')[0];
    expect(panel).toBeVisible();
  });

  test('sets the correct icon', () => {
    render(<EventCard eventData={SUCCESS_EVENT} />);
    const icon = document.getElementsByClassName('event-icon success')[0];
    expect(icon).toBeVisible();
  });

  test('sets the correct title', () => {
    render(<EventCard eventData={SUCCESS_EVENT} />);
    const dynamicTitle = document.getElementsByClassName(
      'card-dynamic-title'
    )[0];
    expect(dynamicTitle).toHaveTextContent('Marked as Success');
  });

  test('sets the correct content', () => {
    render(<EventCard eventData={SUCCESS_EVENT} />);
    const dynamicContent = document.getElementsByClassName(
      'card-dynamic-content'
    )[0];
    expect(dynamicContent).toHaveTextContent(
      `${SUCCESS_EVENT.dynamic_data.user_name}`
    );
  });
});

//sent email event
describe('EventCard, when a sent email event is received', () => {
  test('renders a visible eventcard', () => {
    render(<EventCard eventData={SENT_EMAIL_EVENT} />);
    const panel = document.getElementsByClassName('event-card')[0];
    expect(panel).toBeVisible();
  });

  test('sets the correct icon', () => {
    render(<EventCard eventData={SENT_EMAIL_EVENT} />);
    const icon = document.getElementsByClassName('event-icon sent_email')[0];
    expect(icon).toBeVisible();
  });

  test('sets the correct title', () => {
    render(<EventCard eventData={SENT_EMAIL_EVENT} />);
    const dynamicTitle = document.getElementsByClassName(
      'card-dynamic-title'
    )[0];
    expect(dynamicTitle).toHaveTextContent(
      SENT_EMAIL_EVENT.static_data.subject
    );
  });

  test('sets the correct content', () => {
    render(<EventCard eventData={SENT_EMAIL_EVENT} />);
    const dynamicContent = document.getElementsByClassName(
      'card-dynamic-content'
    )[0];
    expect(dynamicContent).toHaveTextContent(
      `${SENT_EMAIL_EVENT.dynamic_data.user_name}`
    );
    expect(dynamicContent).toHaveTextContent(
      `${SENT_EMAIL_EVENT.dynamic_data.counts.clicks}`
    );
    expect(dynamicContent).toHaveTextContent(
      `${SENT_EMAIL_EVENT.dynamic_data.counts.replies}`
    );
    expect(dynamicContent).toHaveTextContent(
      `${SENT_EMAIL_EVENT.dynamic_data.counts.views}`
    );
  });
});

//sent email reply
describe('EventCard, when a email reply event is received', () => {
  test('renders a visible eventcard', () => {
    render(<EventCard eventData={EMAIL_REPLY_EVENT} />);
    const panel = document.getElementsByClassName('event-card')[0];
    expect(panel).toBeVisible();
  });

  test('sets the correct icon', () => {
    render(<EventCard eventData={EMAIL_REPLY_EVENT} />);
    const icon = document.getElementsByClassName('event-icon email_reply')[0];
    expect(icon).toBeVisible();
  });

  test('sets the correct title', () => {
    render(<EventCard eventData={EMAIL_REPLY_EVENT} />);
    const dynamicTitle = document.getElementsByClassName(
      'card-dynamic-title'
    )[0];
    expect(dynamicTitle).toHaveTextContent(
      `RE: ${EMAIL_REPLY_EVENT.static_data.in_reply_to_subject} ${EMAIL_REPLY_EVENT.static_data.body}`
    );
  });

  test('sets the correct content', () => {
    render(<EventCard eventData={EMAIL_REPLY_EVENT} />);
    const dynamicContent = document.getElementsByClassName(
      'card-dynamic-content'
    )[0];
    expect(dynamicContent).toHaveTextContent(
      `${EMAIL_REPLY_EVENT.dynamic_data.user_name}`
    );
    expect(dynamicContent).toHaveTextContent(
      `${EMAIL_REPLY_EVENT.dynamic_data.counts.clicks}`
    );
    expect(dynamicContent).toHaveTextContent(
      `${EMAIL_REPLY_EVENT.dynamic_data.counts.replies}`
    );
    expect(dynamicContent).toHaveTextContent(
      `${EMAIL_REPLY_EVENT.dynamic_data.counts.views}`
    );
  });
});

//sent call event
describe('EventCard, when a email reply event is received', () => {
  test('renders a visible eventcard', () => {
    render(<EventCard eventData={CALL_EVENT} />);
    const panel = document.getElementsByClassName('event-card')[0];
    expect(panel).toBeVisible();
  });

  test('sets the correct icon', () => {
    render(<EventCard eventData={CALL_EVENT} />);
    const icon = document.getElementsByClassName('event-icon call')[0];
    expect(icon).toBeVisible();
  });

  test('sets the correct title', () => {
    render(<EventCard eventData={CALL_EVENT} />);
    const dynamicTitle = document.getElementsByClassName(
      'card-dynamic-title'
    )[0];
    expect(dynamicTitle).toHaveTextContent(CALL_EVENT.static_data.sentiment);
  });

  test('sets the correct content', () => {
    render(<EventCard eventData={CALL_EVENT} />);
    const dynamicContent = document.getElementsByClassName(
      'card-dynamic-content'
    )[0];
    expect(dynamicContent).toHaveTextContent(
      `${CALL_EVENT.display_name} with ${CALL_EVENT.dynamic_data.phone_number}`
    );
  });
});

//sent added to cadence event
describe('EventCard, when a email reply event is received', () => {
  test('renders a visible eventcard', () => {
    render(<EventCard eventData={ADDED_TO_CADENCE_EVENT} />);
    const panel = document.getElementsByClassName('event-card')[0];
    expect(panel).toBeVisible();
  });

  test('sets the correct icon', () => {
    render(<EventCard eventData={ADDED_TO_CADENCE_EVENT} />);
    const icon = document.getElementsByClassName(
      'event-icon added_to_cadence'
    )[0];
    expect(icon).toBeVisible();
  });

  test('sets the correct title', () => {
    render(<EventCard eventData={ADDED_TO_CADENCE_EVENT} />);
    const dynamicTitle = document.getElementsByClassName(
      'card-dynamic-title'
    )[0];
    expect(dynamicTitle).toHaveTextContent(
      `Added to Cadence ${ADDED_TO_CADENCE_EVENT.dynamic_data.cadence_name}`
    );
  });

  test('sets the correct content', () => {
    render(<EventCard eventData={ADDED_TO_CADENCE_EVENT} />);
    const dynamicContent = document.getElementsByClassName(
      'card-dynamic-content'
    )[0];
    expect(dynamicContent).toHaveTextContent(
      `Added by ${ADDED_TO_CADENCE_EVENT.static_data.instigator.action_caller_name} | Assigned to ${ADDED_TO_CADENCE_EVENT.dynamic_data.user_name}`
    );
  });
});
