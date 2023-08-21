/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginButton from '../components/LoginButton';


describe('LoginButton', () => {
  test('LoginButton renders correctly', () => {
    const { getByRole } = render(<LoginButton handleLogin={() => { }} />);
    const loginButton = getByRole('button', { name: 'Login' });

    expect(loginButton).toBeInTheDocument();
  });
});

