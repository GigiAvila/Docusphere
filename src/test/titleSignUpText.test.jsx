
/** 
 * @vitest-environment jsdom
*/



import React from 'react';
import { render } from '@testing-library/react';
import TitleSignUpText from '../components/TitleSignUpText';
import { SIGNUP_TEXT, SIGNUP_TITLE } from '../data/TitleTexts';

describe('TitleSignUpText', () => {
  test('this title should render correctly when user desire to create a new account', () => {
    const { getByText } = render(<TitleSignUpText />);

    const titleElement = getByText(SIGNUP_TITLE);
    const textElement = getByText(SIGNUP_TEXT);

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
