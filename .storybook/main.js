// const path = require('path');

// require('style-loader');
// require('css-loader');
// require('sass-loader');
// require('postcss-loader');

// const addModuleRule = (config, rule) => {
//   config.module.rules
//     ? config.module.rules.push(rule)
//     : (config.module.rules = [rule]);
// };

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-postcss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
};
