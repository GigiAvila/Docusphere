/** 
 * @vitest-environment jsdom
*/
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VirtualAssistant from '../components/VirtualAssistant';

test('should update input value when user types', async () => {
  const { getByPlaceholderText } = render(<VirtualAssistant isVisible={true} />);
  const input = getByPlaceholderText('Write whatever you need');

  userEvent.type(input, 'testing');

  await waitFor(() => {
    expect(input.value).toBe('testing');
  });
});
