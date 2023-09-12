/** 
 * @vitest-environment jsdom
*/
import React from 'react';
import { render } from '@testing-library/react';
import Signin from '../components/SignIn/Signin';

test('renders Signin component with toggle button', () => {
  const { getByTestId } = render(<Signin />);
  const signinComponent = getByTestId('signin-component');
  const toggleButton = getByTestId('toggle-button');

  expect(signinComponent).toBeInTheDocument();
  expect(toggleButton).toBeInTheDocument();
});