
/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import PricingGetInContact from '../components/Pricing/PricingGetInContact';

test('Clicking on "Let us know" button navigates to "/contactUs"', async () => {
  render(
    <BrowserRouter>
      <PricingGetInContact />
    </BrowserRouter>
  );

  const letUsKnowButton = screen.getByText('Let us know');

  userEvent.click(letUsKnowButton)
  await waitFor(() => {
    expect(window.location.pathname).toBe('/contactUs');
  });
});
