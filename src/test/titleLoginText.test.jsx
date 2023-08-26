
/** 
 * @vitest-environment jsdom
*/



import React from 'react';
import { render } from '@testing-library/react';
import TitleLoginText from '../components/TitleLoginText';
import { LOGIN_TEXT, LOGIN_TITLE } from '../data/TitleTexts';

describe('TitleLoginText', () => {
  test('this title should render correctly when user is not logged in yet', () => {
    const { getByText } = render(<TitleLoginText isLoggedIn={false} />);

    const titleElement = getByText(LOGIN_TITLE);
    const textElement = getByText(LOGIN_TEXT);

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
