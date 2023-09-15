/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render } from '@testing-library/react';
import ContactButton from '../components/ContactButton';

test('renders WhatsApp image', () => {
  const { getByAltText } = render(<ContactButton />);
  const whatsappImage = getByAltText('WhatsAppLogo');

  expect(whatsappImage).toBeInTheDocument();
});
