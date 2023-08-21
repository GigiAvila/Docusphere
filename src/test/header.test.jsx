/** 
 * @vitest-environment jsdom
*/

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

test('Header renders Navbar and StyleColorMode components', () => {
  const { getByTestId } = render(   // toma solo la etiqueta header 
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );


  expect(getByTestId('navbar-component')).toBeInTheDocument();
  expect(getByTestId('style-color-mode-component')).toBeInTheDocument();
});
