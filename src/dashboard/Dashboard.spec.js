// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

// shows the controls and display
describe('Shows Components', () => {
  it('displays dashboard component', () => {
    render(<Dashboard />);
  })
  it('displays controls component', () => {
    render(<Controls />);
  })
  it('displays display component', () => {
    render(<Display />);
  })
})

// buttons' text changes to reflect the state the door will be in if clicked
describe('button changes from close gate to open gate when clicked', () => {
  it('open/close button text changes when clicked once', () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);
    const button = getByText(/close gate/i);

    fireEvent.click(button);
    
    getByText(/close gate/i);
  })
})