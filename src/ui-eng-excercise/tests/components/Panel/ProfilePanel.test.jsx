import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from '../../../components/Panel/Panel';
import { PANEL_PROFILE_PROPS } from './PanelProps__mock__';

describe('Panel, when profile props are passed', () => {
  const {
    type,
    display_name,
    title,
    person_company_name,
    person_company_website,
    twitter_handle,
    linkedin_url,
    crm_url,
    personal_website
  } = PANEL_PROFILE_PROPS;

  test('Panel correctly sets display name', () => {
    render(<Panel type={type} name={display_name} />);
    const panel = document.getElementsByClassName('panel')[0];
    // const panelType = panel.childNodes[0];
    expect(panel).toBeVisible();
    expect(panel).toHaveTextContent(display_name);
  });

  test('Panel correctly sets media links', () => {
    render(
      <Panel
        type={type}
        twitter_handle={twitter_handle}
        linkedin_url={linkedin_url}
        crm_url={crm_url}
        personal_website={personal_website}
      />
    );
    const panel = document.getElementsByClassName('panel')[0];
    expect(panel).toBeVisible();
    expect(
      document.getElementsByClassName('cloud-icon')[0].closest('a')
    ).toHaveAttribute('href', crm_url);
    expect(
      document.getElementsByClassName('linkedin-icon')[0].closest('a')
    ).toHaveAttribute('href', linkedin_url);
    expect(
      document.getElementsByClassName('twitter-icon')[0].closest('a')
    ).toHaveAttribute('href', `www.twitter.com/${twitter_handle}`);
    expect(
      document.getElementsByClassName('link-icon')[0].closest('a')
    ).toHaveAttribute('href', personal_website);
  });

  test('Panel correctly sets title', () => {
    render(<Panel type={type} title={title} />);
    const panel = document.getElementsByClassName('panel')[0];
    expect(panel).toBeVisible();
    expect(panel).toHaveTextContent(title);
  });

  test('Panel correctly sets company name and url', () => {
    render(
      <Panel
        type={type}
        company_name={person_company_name}
        company_website={person_company_website}
      />
    );
    const panel = document.getElementsByClassName('panel')[0];
    expect(panel).toBeVisible();
    expect(panel).toHaveTextContent(person_company_name);
    expect(screen.getByText(person_company_name)).toHaveAttribute(
      'href',
      person_company_website
    );
  });
});
