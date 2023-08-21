/** 
 * @vitest-environment jsdom
*/

import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {

  test('should render the correct text', () => {
    render(<Footer />)


    expect(screen.getByText('Created with love by Gigi Avila 🤖')).toBeInTheDocument()
  })
})

