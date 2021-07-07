export const INVALID_EVENT = {
  type: 'iouytres345d6f7g8h9j0ko-ijhuygftrd5e4sw334wd5fr'
};

export const VOICEMAIL_EVENT = {
  created_at: '2020-04-09T01:50:06.951221Z',
  id: 'call-1',
  occurred_at: '2019-10-03T15:00:57.089927Z',
  dynamic_data: {
    user_name: 'The chosen one',
    voicemail_duration: 118
  },
  type: 'voicemail'
};

export const SUCCESS_EVENT = {
  created_at: '2021-04-07T15:00:57.089927Z',
  id: 'success-1',
  occurred_at: '2021-04-07T15:00:57.089927Z',
  dynamic_data: {
    user_name: 'The lone wanderer'
  },
  type: 'success'
};

export const SENT_EMAIL_EVENT = {
  created_at: '2020-10-28T13:19:45.637830Z',
  id: 'sent_email-1',
  occurred_at: '2020-10-28T13:19:45.562226Z',
  dynamic_data: {
    counts: {
      clicks: 12523,
      replies: 1784,
      views: 33993
    },
    user_name: 'The courier'
  },
  static_data: {
    status: 'sent',
    subject: 'Have you seen the man in the checkered suit?'
  },
  type: 'sent_email'
};

export const EMAIL_REPLY_EVENT = {
  created_at: '2020-10-28T13:24:40.330852Z',
  id: 'email_reply-1',
  occurred_at: '2020-10-28T13:24:31.000000Z',
  dynamic_data: {
    counts: {
      clicks: 15324,
      replies: 111,
      views: 999
    },
    user_name: 'The vault Dweller'
  },
  static_data: {
    body: 'About that water chip you asked about',
    email_reply_id: 2,
    headers: {
      to: ['vault21@fakeemail.co'],
      cc: ['marcus@fakeaddress.com']
    },
    in_reply_to_id: 1,
    in_reply_to_subject: 'waterchip',
    sender: 'fake@fake.com'
  },
  type: 'email_reply'
};

export const CALL_EVENT = {
  created_at: '2020-04-11T23:09:18.196574Z',
  id: 'call-2',
  occurred_at: '2019-10-03T15:00:56.523049Z',
  dynamic_data: {
    user_name: 'Lone Survivor',
    phone_number: '+12345678910'
  },
  static_data: {
    note_content: 'im looking for my son',
    note_id: 1,
    recording_urls: ['https://recordings.salesloft.com'],
    sentiment: 'Have you seen my son Shawn?'
  },
  type: 'call'
};

export const ADDED_TO_CADENCE_EVENT = {
  created_at: '2020-04-05T07:37:24.043963Z',
  id: 'added_to_cadence-1008718400',
  occurred_at: '2019-10-03T15:00:18.871103Z',
  dynamic_data: {
    cadence_name: 'Opportunity | Active Opps',
    user_name: 'Yes Man'
  },
  static_data: {
    cadence_id: 123,
    instigator: {
      action_caller_id: 1,
      action_caller_name: 'Mr. House'
    }
  },
  type: 'added_to_cadence'
};
