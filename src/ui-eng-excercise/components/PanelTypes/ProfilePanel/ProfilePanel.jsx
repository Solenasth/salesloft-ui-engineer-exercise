import React from 'react';
import './ProfilePanel.css';
import { default as StarOutlinedIcon } from '../../../../_starter/shared/Icons/StarOutlined';
import { default as EllipsisHorizontalIcon } from '../../../../_starter/shared/Icons/EllipsisHorizontal';

const ProfilePanel = ({ name, title, company_name, company_website }) => {
  return (
    <>
      <div className="profile-panel-titlebar">
        <StarOutlinedIcon className="profile-panel-titlebar__star-icon" />
        <EllipsisHorizontalIcon />
      </div>
      <div className="profile-panel-content">
        <h1 className="profile-panel-content__name">{name}</h1>
        <h2 className="profile-panel-content__title">{title}</h2>
        <a className="profile-panel-content__company" href={company_website}>
          {company_name}
        </a>
      </div>
    </>
  );
};

export default ProfilePanel;
