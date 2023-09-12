/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render } from '@testing-library/react';
import SiteMap from '../components/Footer/SiteMap';

test('renders SiteMap component with text content', () => {
  const { getByText } = render(<SiteMap />);

  expect(getByText('PRODUCT')).toBeInTheDocument();
  expect(getByText('Create an account')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
  expect(getByText('My Account')).toBeInTheDocument();
  expect(getByText('Pricing')).toBeInTheDocument();

  expect(getByText('COMPANY')).toBeInTheDocument();
  expect(getByText('About Us')).toBeInTheDocument();
  expect(getByText('Partners')).toBeInTheDocument();
  expect(getByText('Testimonies')).toBeInTheDocument();

  expect(getByText('COMMUNITY')).toBeInTheDocument();
  expect(getByText('Blog')).toBeInTheDocument();

  expect(getByText('SUPPORT')).toBeInTheDocument();
  expect(getByText('FAQs')).toBeInTheDocument();
  expect(getByText('Contact Us')).toBeInTheDocument();
});
