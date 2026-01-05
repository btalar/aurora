import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { Button } from '.'

describe('Button Component', () => {
  test('should render button with children', () => {
    render(<Button>Click me</Button>)

    const btn = screen.getByRole('button')

    expect(btn).toBeTruthy()
    expect(btn.textContent).toBe('Click me')
  })
})
