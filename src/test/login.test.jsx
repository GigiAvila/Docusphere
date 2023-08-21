/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../components/Login';

test('Inputs change value when typed', async () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText('Introduce your email');
  const passwordInput = screen.getByPlaceholderText('Enter your password');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  await waitFor(() => {
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });
});
