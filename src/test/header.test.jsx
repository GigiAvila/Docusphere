/** 
 * @vitest-environment jsdom
*/




import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/Header';

test('Header renders Navbar and StyleColorMode components', () => {
  const { getByTestId } = render(
    <AuthProvider> {/* Envuelve el Header con el AuthProvider */}
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </AuthProvider>
  );

  expect(getByTestId('navbar-component')).toBeInTheDocument();
  expect(getByTestId('user-avatar-component')).toBeInTheDocument();
  expect(getByTestId('style-color-mode-component')).toBeInTheDocument();
});
