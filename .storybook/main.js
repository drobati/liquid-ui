module.exports = {
  stories: [
    '../src/**/*.stories.(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    'storybook-preset-craco',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/react'
}
