/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render } from '@testing-library/react';
import LogoutButton from '../components/LogoutButton';


describe('LogoutButton', () => {
  test('LogoutButton renders correctly', () => {
    const { getByRole } = render(<LogoutButton handleLogout={() => { }} />);
    const logoutButton = getByRole('button', { name: 'Logout' });

    expect(logoutButton).toBeInTheDocument();
  });
});

