import type { FC } from 'react'

import { Button } from '../src/components'

export const App: FC = () => (
  <div className="playground">
    <div className="header">
      <h1>Aurora Components Playground</h1>
    </div>

    <section className="section">
      <h2>Button Component</h2>
      <div className="button-examples">
        <Button variant="primary" size="small">
          Small Primary
        </Button>
        <Button variant="primary" size="medium">
          Medium Primary
        </Button>
        <Button variant="primary" size="large">
          Large Primary
        </Button>
      </div>
      <div className="button-examples">
        <Button variant="secondary" size="medium">
          Secondary
        </Button>
        <Button variant="danger" size="medium">
          Danger
        </Button>
        <Button variant="primary" size="medium" isDisabled>
          Disabled
        </Button>
      </div>
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
