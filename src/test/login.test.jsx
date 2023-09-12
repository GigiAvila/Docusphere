/** 
 * @vitest-environment jsdom
*/
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../context/AuthContext';
import LogIn from '../components/SignIn/Login';

test('renders Login component', async () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider >
          <LogIn />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );

  await waitFor(() => {
    const userNameInput = screen.getByPlaceholderText('Introduce your username');
    const emailInput = screen.getByPlaceholderText('Introduce your email');
    const passwordInput = screen.getByPlaceholderText('Enter your password');

    expect(userNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});

