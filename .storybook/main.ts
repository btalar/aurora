import { withoutVitePlugins } from '@storybook/builder-vite'
import type { StorybookConfig } from '@storybook/react-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    {
      directory: '../src/components',
      files: '**/*.stories.*',
    },
    {
      directory: '../src/stories',
      files: '**/*.{stories.*,mdx}',
    },
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    {
      name: 'storybook-design-token',
      options: {
        designTokenGlob: 'src/**/*.css',
      },
    },
  ],
  async viteFinal(config) {
    return {
      ...config,
      plugins: [
        ...(await withoutVitePlugins(config.plugins, [
          'vite:dts',
          'vite:lib-inject-css',
          'vite-plugin-eslint2',
        ])),
        tsconfigPaths(),
      ],
    }
  },
}

export default config
