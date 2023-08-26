/** 
 * @vitest-environment jsdom
*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import Signin from '../components/Signin';

describe('Signin Component', () => {
  test('should render Signin component with toggle', () => {
    render(<Signin />);


  });
});