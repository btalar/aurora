'use client'

import cn from 'classnames'
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

import styles from './style.module.scss'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Button size */
  size?: 'small' | 'medium' | 'large'
  /** Button contents */
  children: ReactNode
  /** Disabled state */
  disabled?: boolean
}

const Button = ({
  size = 'medium',
  children,
  disabled = false,
  className,
  ...props
}: ButtonProps): ReactElement => (
  <button
    type="button"
    disabled={disabled}
    className={cn(styles.button, styles[size], className)}
    {...props}
  >
    {children}
  </button>
)

export { Button }
