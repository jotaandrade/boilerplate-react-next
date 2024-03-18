import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /Efy.ai/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
