# Aurora Components - Playground

This is a development playground for testing and building components in a live React environment.

## Usage

### Start the playground

```bash
yarn playground
# or
yarn dev
```

This will start a Vite development server (usually on http://localhost:3000).

### Build the playground

```bash
yarn build-playground
```

This will create a production build in the `playground-dist` directory.

## What is this?

The playground is a simple React application that allows you to:

- Test your components in a real React environment
- Experiment with component variations
- Debug component behavior
- Quickly prototype new components

## How to use

1. Open `playground/App.tsx`
2. Import your components from `../src/components/`
3. Add component examples and experiments
4. The page will hot-reload automatically

## Example

```tsx
import { Button } from '../src/components/Button'
import { Text } from '../src/components/Text'

function App() {
  return (
    <div>
      <Button label="Click me" primary />
      <Text text="Hello World" />
    </div>
  )
}
```

## When to use Playground vs Storybook?

- **Playground**: For quick experiments, integration testing, and complex component interactions
- **Storybook**: For component documentation, visual testing, and showcasing component variations
