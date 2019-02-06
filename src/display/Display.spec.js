// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);

// displays if gate is open/closed and if it is locked/unlocked

describe('Renders Controls Component', () => {
  it('renders controls', () => {
    render(<Display />);
  });
});