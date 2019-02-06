// Test away!
import React from 'react';
import { render, cleanup, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);

// displays if gate is open/closed and if it is locked/unlocked

describe('Renders Controls Component', () => {
  it('renders controls', () => {
    render(<Display />);
  });
});

// displays if gate is open/closed
describe('displays if gate is open/closed', () => {
  it('displays `Closed` if the closed prop is true', () => {
    const { getByText } = render(<Display closed={true}/>)
    getByText(/closed/i);
    // when locked or closed use the red-led class
    expect(getByText(/closed/i)).toHaveClass('red-led');
  })
  it('displays `Open` if closed prop is false', () => {
    const { getByText } = render(<Display closed={false}/>)
    getByText(/open/i);
    // when unlocked or open use the green-led class
    expect(getByText(/open/i)).toHaveClass('green-led');
  })
})

// displays if gate is locked/unlocked
describe('displays if gate is locked/unlocked', () => {
  it('displays `locked` if the locked prop is true', () => {
    const { getByText } = render(<Display locked={true}/>)
    getByText(/locked/i);
    // when locked or closed use the red-led class
    expect(getByText(/locked/i)).toHaveClass('red-led');
  })
  it('displays `unlocked` if locked prop is false', () => {
    const { getByText } = render(<Display unlocked={false}/>)
    getByText(/unlocked/i);
    // when unlocked or open use the green-led class
    expect(getByText(/unlocked/i)).toHaveClass('green-led');
  })
})