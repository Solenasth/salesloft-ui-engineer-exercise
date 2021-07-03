import React from 'react';
import './TitleBar.css';

const TitleBar = ({ title }) => {
  return (
    <div className="title-bar">
      <p className="title-bar__title">{title}</p>
    </div>
  );
};

export default TitleBar;
