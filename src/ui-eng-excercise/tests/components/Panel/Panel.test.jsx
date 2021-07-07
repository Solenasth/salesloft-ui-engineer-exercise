import * as React from 'react';
import { render } from '@testing-library/react';
import Panel from '../../../components/Panel/Panel';
import {
  PANEL_EMPTY_PROPS,
  PANEL_INVALID_PROPS,
  PANEL_PROFILE_PROPS
} from './PanelProps__mock__';

describe('Panel, when profile type is passed', () => {
  const { type } = PANEL_PROFILE_PROPS;
  test('renders a visible profile panel', () => {
    render(<Panel type={type} />);
    const panel = document.getElementsByClassName('panel')[0];
    const panelType = panel.childNodes[0];
    expect(panel).toBeVisible();
    expect(panelType).toHaveClass('profile-panel');
  });
});

describe('Panel, when no props are passed', () => {
  test('renders a visible placeholder panel', () => {
    render(<Panel />);
    const panel = document.getElementsByClassName('panel')[0];
    const panelType = panel.childNodes[0];
    expect(panel).toBeVisible();
    expect(panelType).toHaveClass('placeholder-panel');
  });
});

describe('Panel, when empty props are passed', () => {
  test('renders a visible placeholder panel', () => {
    const { type } = PANEL_EMPTY_PROPS;
    render(<Panel type={type} />);
    const panel = document.getElementsByClassName('panel')[0];
    const panelType = panel.childNodes[0];
    expect(panel).toBeVisible();
    expect(panelType).toHaveClass('placeholder-panel');
  });
});

describe('Panel, when invalid props are passed', () => {
  test('renders a visible placeholder panel', () => {
    const { type } = PANEL_INVALID_PROPS;
    render(<Panel type={type} />);
    const panel = document.getElementsByClassName('panel')[0];
    const panelType = panel.childNodes[0];
    expect(panel).toBeVisible();
    expect(panelType).toHaveClass('placeholder-panel');
  });
});
