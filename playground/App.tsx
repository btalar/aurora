import type { FC } from 'react'

import { ThemeToggle } from './components/ThemeToggle'

export const App: FC = () => (
  <div className="playground">
    <div className="header">
      <h1>Aurora Components Playground</h1>
      <ThemeToggle />
    </div>

    <section className="section">
      <h2>Button Component</h2>
    </section>

    <section className="section">
      <h2>Instructions</h2>
      <p>
        This is your development playground. You can import and test your
        components here.
      </p>
      <p>
        Edit <code>playground/App.tsx</code> to add more component examples.
      </p>
    </section>
  </div>
)
