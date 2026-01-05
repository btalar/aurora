'use client'

import cn from 'classnames'
import type { ReactElement } from 'react'
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components'

import styles from './Button.module.css'

/**
 * Button component props extending React Aria ButtonProps for full accessibility support
 */
export interface ButtonProps extends AriaButtonProps {
  /**
   * Visual style variant of the button
   * - `primary`: Main call-to-action with brand color
   * - `secondary`: Subtle style for secondary actions
   * - `danger`: Red style for destructive actions
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger'

  /**
   * Size of the button
   * - `small`: Compact button for tight spaces
   * - `medium`: Standard button size
   * - `large`: Larger button for emphasis
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
}

/**
 * Accessible button component built with React Aria
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium" onPress={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}: ButtonProps): ReactElement => {
  const sizeClass = {
    small: styles.sm,
    medium: styles.md,
    large: styles.lg,
  }[size]

  return (
    <AriaButton
      className={cn(styles.button, styles[variant], sizeClass, className)}
      {...props}
    >
      {children}
    </AriaButton>
  )
}

export { Button }
