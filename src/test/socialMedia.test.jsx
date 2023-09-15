/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render } from '@testing-library/react';
import SocialMedia from '../components/Footer/SocialMedia.jsx';
import { BrowserRouter } from 'react-router-dom';


test('renders SocialMedia component with correct alt ', () => {
  const { getByAltText } = render(<BrowserRouter>
    <SocialMedia />
  </BrowserRouter>);


  const facebookLogoImg = getByAltText('facebookLogo');
  const instagramLogoImg = getByAltText('InstagramLogo');
  const twitterLogoImg = getByAltText('TwitterLogo');
  const youtubeLogoImg = getByAltText('youtubeLogo');
  const linkedInLogoImg = getByAltText('linkedInLogo');

  expect(facebookLogoImg).toBeInTheDocument();
  expect(instagramLogoImg).toBeInTheDocument();
  expect(twitterLogoImg).toBeInTheDocument();
  expect(youtubeLogoImg).toBeInTheDocument();
  expect(linkedInLogoImg).toBeInTheDocument();
});