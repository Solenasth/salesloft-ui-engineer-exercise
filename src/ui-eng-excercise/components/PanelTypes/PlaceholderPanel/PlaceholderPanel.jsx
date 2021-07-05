import React from 'react';
import './PlaceholderPanel.css';

const PlaceholderPanel = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const getRandomSizeClass = luck => {
    switch (luck) {
      case 0:
        return 'sm';
      case 1:
        return 'md';
      case 2:
        return 'l';
      case 3:
      default:
        return 'xl';
    }
  };
  return (
    <div
      className={`placeholder-panel ${getRandomSizeClass(getRandomInt(4))}`}
    />
  );
};

export default PlaceholderPanel;
