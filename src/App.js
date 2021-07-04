import React from 'react';
import PeoplePage from './ui-eng-excercise/components/PeoplePage/PeoplePage';
//mock data
import mock_payload from './ui-eng-excercise/mockPayload';

export const App = () => {
  return (
    <>
      <PeoplePage payload={mock_payload} />
    </>
  );
};
