import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

it('renders table without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table />, div);
  expect(div).toBeDefined();
});