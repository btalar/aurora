import { useState } from 'react'

import { Button } from '../src/components/Button'
import { Text } from '../src/components/Text'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="playground">
      <div className="header">
        <h1>Aurora Components Playground</h1>
        <ThemeToggle />
      </div>

      <section className="section">
        <h2>Button Component</h2>
        <div className="button-examples">
          <Button onClick={() => setCount(count + 1)}>
            Increment Counter
          </Button>
          <Button onClick={() => setCount(count - 1)}>
            Decrement Counter
          </Button>
          <Button size="small">Small Button</Button>
          <Button size="large">Large Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
        <p>Counter: {count}</p>
      </section>

      <section className="section">
        <h2>Text Component</h2>
        <Text text="Hello from Aurora Components!" />
        <Text text="This is a playground environment for testing components" />
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
}

export default App
