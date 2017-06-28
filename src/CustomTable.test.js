import React from 'react';
import ReactDOM from 'react-dom';
import CustomTable from './CustomTable';

it('renders table without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomTable />, div);
  expect(div).toBeDefined();
});