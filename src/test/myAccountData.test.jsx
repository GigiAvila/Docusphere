/** 
 * @vitest-environment jsdom
*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuth';
import MyAccountData from '../components/MyAccount/MyAccountData';


const user = {
  userName: 'TestUserName',
  loginEmail: 'test@example.com',
  loginPassword: 'TestPassword',
};


test('MyAccountData renders correctly', () => {
  render(

    <BrowserRouter>
      <AuthProvider user={user}>
        <MyAccountData />
      </AuthProvider>
    </BrowserRouter>

  );

  expect(screen.getByText('My Account')).toBeInTheDocument();
  expect(screen.getByText('User Name')).toBeInTheDocument();
  expect(screen.getByText('Email')).toBeInTheDocument();
  expect(screen.getByText('Password')).toBeInTheDocument();
  expect(screen.getByText('Phone Number')).toBeInTheDocument();
});
