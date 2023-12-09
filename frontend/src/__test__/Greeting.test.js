import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Greeting from 'frontend/src/Greeting.jsx'; // Adjust the path if needed

describe('Greeting Component', () => {
  test('renders Hello, World! when name is World', () => {
    render(<Greeting name="World" />);
    const greetingElement = screen.getByText(/hello, world!/i);
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders Hello, Alice! when name is Alice', () => {
    render(<Greeting name="Alice" />);
    const greetingElement = screen.getByText(/hello, alice!/i);
    expect(greetingElement).toBeInTheDocument();
  });
});

