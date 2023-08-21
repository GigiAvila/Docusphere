/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('Navbar renders navlinks with correct text and path', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const aboutLink = screen.getByRole('link', { name: 'About' });
  const blogLink = screen.getByRole('link', { name: 'Blog' });
  const contactLink = screen.getByRole('link', { name: 'Contact' });

  expect(homeLink.getAttribute('href')).toBe('/home');
  expect(aboutLink.getAttribute('href')).toBe('/about');
  expect(blogLink.getAttribute('href')).toBe('/blog');
  expect(contactLink.getAttribute('href')).toBe('/contact');
});
