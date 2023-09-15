/** 
 * @vitest-environment jsdom
*/
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import UserAvatar from '../components/UserAvatar';
import { AuthProvider } from '../context/AuthContext';

test('UserAvatar displays correctly when logged in', async () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider value={{ isLoggedIn: true, logout: () => { } }}>
          <UserAvatar />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );

  const userAvatarComponent = screen.getByTestId('user-avatar-component');
  expect(userAvatarComponent).toBeInTheDocument();

  const userButton = userAvatarComponent.querySelector('user-avatar-button');
  userEvent.click(userButton);
});

test('MenuList displays correctly when logged in', async () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider value={{ isLoggedIn: true, logout: () => { } }}>
          <UserAvatar />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );

  const userAvatarComponent = screen.getByTestId('user-avatar-component');
  expect(userAvatarComponent).toBeInTheDocument();

  const userButton = userAvatarComponent.querySelector('[data-testid="user-avatar-button"]');
  userEvent.click(userButton);

  await waitFor(() => {
    const myAccountLink = screen.getByText('My account');
    expect(myAccountLink).toBeInTheDocument();

    const logoutMenuItem = screen.getByText('Logout');
    expect(logoutMenuItem).toBeInTheDocument();
  });
});
