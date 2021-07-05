import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      <div className="tabs-menu">
        {children.map((tab, i) => (
          <button
            key={`tabs_menu_button_${i}`}
            className={`tabs-menu__tab ${
              selectedTab === i ? 'tabs-menu__tab--active' : ''
            }`}
            onClick={() => setSelectedTab(i)}
          >
            <h1 className="tab-title">{tab.props.title}</h1>
          </button>
        ))}
      </div>
      {children.map((tab, i) => (
        <div
          key={`tabs_content_button_${i}`}
          className={`tab-content ${
            selectedTab === i ? 'tab-content--active' : ''
          }`}
        >
          {tab}
        </div>
      ))}
    </>
  );
};

export default Tabs;
