// Test away!
import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(cleanup);

describe('Renders Controls Component', () => {
  it('renders controls', () => {
    render(<Controls />);
  });
});

// provide buttons to toggle the closed and locked states.
describe('Controls Component', () => {
  it('button to close gate', () => {
    const { getByText } = render(<Controls />);

    getByText(/close gate/i);
  });

  it('button to lock gate', () => {
    const { getByText } = render(<Controls />);

    getByText(/lock gate/i);
  });
});

// the closed toggle button is disabled if the gate is closed
// describe('', () => {
//   it('', () => {

//   })
// })