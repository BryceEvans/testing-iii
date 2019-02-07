// Test away!
import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';
import { isRoot } from 'postcss-selector-parser';

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

// defaults to unlocked and open
describe('defaults to unlocked and open', () => {
  it('set to unlocked and opened by default', () => {
    const { getByText } = render(<Controls />);
    getByText(/close gate/i);
    getByText(/lock gate/i);
  })
})



// the closed toggle button is disabled if the gate is closed
describe('closed toggle button disablabed if gate locked', () => {
  it('closed toggle button disablabe if gate locked', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);

    getByText(/open gate/i);

    const button = getByText(/open gate/i);
    expect(button.disabled).toEqual(true);
  })
})

// the locked toggle button is disabled if the gate is open
describe('locked toggle button disablabed if gate open', () => {
  it('closed toggle button disablabed if gate open', () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);

    getByText(/close gate/i);

    const button = getByText(/lock gate/i);
    expect(button.disabled).toEqual(true);
  })
})

// cannot be closed or opened if locked
describe('cannot be closed or opened if locked', () => {
  it('cannot be closed or opened if locked', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);

    getByText(/lock gate/i);

    const button = getByText(/open gate/i);
    expect(button.disabled).toEqual(true);
  })
})