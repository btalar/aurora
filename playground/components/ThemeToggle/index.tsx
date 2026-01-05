'use client'

import { useTheme } from '../../../src/providers/ThemeProvider'

import styles from './style.module.scss'

interface Props {
  /** Show label next to the toggle */
  showLabel?: boolean
}

const ThemeToggle = ({ showLabel = true }: Props) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.themeToggle}>
      {showLabel && <span className={styles.label}>Theme:</span>}
      <button
        type="button"
        onClick={toggleTheme}
        className={styles.button}
        aria-label="Toggle theme"
      >
        <span className={styles.icon}>{theme === 'light' ? '🌞' : '🌙'}</span>
        {showLabel && (
          <span className={styles.text}>
            {theme === 'light' ? 'Light' : 'Dark'}
          </span>
        )}
      </button>
    </div>
  )
}

export { ThemeToggle }
