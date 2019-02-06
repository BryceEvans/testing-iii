// Test away
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('Dahsboard Component', () => {
  it('displays dashboard component', () => {
    render(<Dashboard />);
  })
})