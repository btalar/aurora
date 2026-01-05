import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'light',
  brandTitle: 'Aurora Design System',
  brandUrl: '/',
  brandTarget: '_self',
})

addons.setConfig({
  theme,
})
