/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';


import Navbar from '../components/Navbar';

test('Navbar renders correctly', () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </BrowserRouter>
  );

  const navbarComponent = screen.getByTestId('navbar-component');
  expect(navbarComponent).toBeInTheDocument();

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(6);
});

test('Navbar links navigate to the correct routes', async () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </BrowserRouter>
  );

  const homeLink = screen.getByText('Home');
  userEvent.click(homeLink);

  await waitFor(() => {
    expect(window.location.pathname).toBe('/home');
  });

  const aboutLink = screen.getByText('About');
  userEvent.click(aboutLink);

  await waitFor(() => {
    expect(window.location.pathname).toBe('/about');
  });

  const blogLink = screen.getByText('Blog');
  userEvent.click(blogLink);

  await waitFor(() => {
    expect(window.location.pathname).toBe('/blog');
  });

  const contactLink = screen.getByText('Contact');
  userEvent.click(contactLink);

  await waitFor(() => {
    expect(window.location.pathname).toBe('/contact');
  });


});

test('Navbar "Sign In" link appears when not logged in', () => {
  const { getByText } = render(
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </BrowserRouter>
  );

  const signInLink = getByText('Sign In');
  expect(signInLink).toBeInTheDocument();
});



