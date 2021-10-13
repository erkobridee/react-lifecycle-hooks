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
  stories: [
    '../src/index.stories.tsx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
  ],
};
