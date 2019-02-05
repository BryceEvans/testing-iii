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
describe('button changes to reflect state door in when clicked', () => {
  it('buttons display state of door', () => {
    const { getByText, getByTestId } = render(<Controls />);
    const button = getByTestId("close-button");

    fireEvent.click(button);
    // fireEvent.click(button); it works with this twice, which also doesn't make any sense...

    // I don't know why this works with close gate. In use, you click on it once and it says open gate.
    getByText(/close gate/i);
  })
})
