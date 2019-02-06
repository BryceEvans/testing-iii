// Test away!

import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

afterEach(cleanup);

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

// buttons' text changes to reflect the state the door will be in if clicked
describe('button changes from close gate to open gate when clicked', () => {
  it('open/close button text changes when clicked once', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);
    const button = getByText(/close gate/i);

    fireEvent.click(button);
    
    getByText(/close gate/i);
  })
})

// the closed toggle button is disabled if the gate is closed
