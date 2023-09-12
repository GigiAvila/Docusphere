/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render } from '@testing-library/react';
import SocialMedia from '../components/Footer/SocialMedia.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


test('renders SocialMedia component with correct alt text', () => {
  const { getByAltText } = render(<Router>
    <SocialMedia />
  </Router>);

  // Verificar los atributos alt de las imágenes
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