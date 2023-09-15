/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render } from '@testing-library/react';
import SiteMap from '../components/Footer/SiteMap';

test('renders SiteMap component with text content', () => {
  const { getByText } = render(<SiteMap />);

  expect(getByText('Product')).toBeInTheDocument();
  expect(getByText('Create an account')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
  expect(getByText('My Account')).toBeInTheDocument();
  expect(getByText('Pricing')).toBeInTheDocument();

  expect(getByText('Company')).toBeInTheDocument();
  expect(getByText('About us')).toBeInTheDocument();
  expect(getByText('Partners')).toBeInTheDocument();
  expect(getByText('Testimonies')).toBeInTheDocument();

  expect(getByText('Community')).toBeInTheDocument();
  expect(getByText('Blog')).toBeInTheDocument();

  expect(getByText('Support')).toBeInTheDocument();
  expect(getByText('FAQs')).toBeInTheDocument();
  expect(getByText('Contact Us')).toBeInTheDocument();
});
