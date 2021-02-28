import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Menu from '../../Components/Menu';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Can render menu', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Menu />, container);
  });
  const navLink = container.querySelector('.nav-link');
  expect(navLink.textContent).toBe('Teams');
});