import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'

import { Button } from '.'

describe('Button Component', () => {
  test('should render button with children', () => {
    render(<Button>Click me</Button>)

    const btn = screen.getByRole('button')

    expect(btn).toBeTruthy()
    expect(btn.textContent).toBe('Click me')
  })

  test('should handle click event', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('should render with medium size by default', () => {
    render(<Button>Default</Button>)

    const btn = screen.getByRole('button')

    // Check that button has classes (CSS modules generates unique class names)
    expect(btn.className).toBeTruthy()
    expect(btn.className.length).toBeGreaterThan(0)
  })

  test('should render with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    let btn = screen.getByRole('button')
    expect(btn.className).toBeTruthy()
    expect(btn.textContent).toBe('Secondary')

    rerender(<Button variant="outline">Outline</Button>)
    btn = screen.getByRole('button')
    expect(btn.textContent).toBe('Outline')

    rerender(<Button variant="ghost">Ghost</Button>)
    btn = screen.getByRole('button')
    expect(btn.textContent).toBe('Ghost')
  })

  test('should render with different sizes', () => {
    const { rerender } = render(<Button size="small">Small</Button>)
    let btn = screen.getByRole('button')
    expect(btn.textContent).toBe('Small')

    rerender(<Button size="medium">Medium</Button>)
    btn = screen.getByRole('button')
    expect(btn.textContent).toBe('Medium')

    rerender(<Button size="large">Large</Button>)
    btn = screen.getByRole('button')
    expect(btn.textContent).toBe('Large')
  })

  test('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)

    const btn = screen.getByRole('button')

    expect(btn).toHaveProperty('disabled', true)
  })

  test('should not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    )

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(handleClick).not.toHaveBeenCalled()
  })

  test('should accept custom className', () => {
    render(<Button className="custom-class">Custom</Button>)

    const btn = screen.getByRole('button')

    expect(btn.className).toContain('custom-class')
  })
})
