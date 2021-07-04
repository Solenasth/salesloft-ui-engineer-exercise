import React from 'react';
import './ProfilePanel.css';
import { default as StarOutlinedIcon } from '../../../../_starter/shared/Icons/StarOutlined';
import { default as EllipsisHorizontalIcon } from '../../../../_starter/shared/Icons/EllipsisHorizontal';
import { default as CloudIcon } from '../../../../_starter/shared/Icons/Cloud';
import { default as LinkedInIcon } from '../../../../_starter/shared/Icons/LinkedIn';
import { default as TwitterIcon } from '../../../../_starter/shared/Icons/Twitter';
import { default as LinkIcon } from '../../../../_starter/shared/Icons/Link';

const ProfilePanel = ({
  name,
  title,
  company_name,
  company_website,
  crm_url,
  linkedin_url,
  twitter_handle,
  personal_website
}) => {
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
        <div className="profile-panel-content__media-links">
          {/* I was unsure on wether this was the correct url, 
          but it's the one that kinda matches the cloud icon on the payload. */}
          <a href={crm_url}>
            <CloudIcon className="cloud-icon" />
          </a>
          <a href={linkedin_url}>
            <LinkedInIcon className="linkedin-icon" />
          </a>
          <a href={`www.twitter.com/${twitter_handle}`}>
            <TwitterIcon className="twitter-icon" />
          </a>
          <a href={personal_website}>
            <LinkIcon className="link-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfilePanel;
