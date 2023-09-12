/** 
 * @vitest-environment jsdom
*/

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Language from '../components/Footer/Language';

test('change language when select other option', async () => {
  render(<Language />);

  const englishOption = screen.getByDisplayValue('English');
  expect(englishOption).toBeInTheDocument();

  userEvent.selectOptions(screen.getByLabelText('Language'), 'Spanish');

  await waitFor(() => {
    const spanishOption = screen.getByDisplayValue('Spanish');
    expect(spanishOption).toBeInTheDocument();
  });
});
