module.exports = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
};
