const path = require('path');

const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    'storybook-addon-next',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: { reactDocgen: false },
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': resolvePath('node_modules/@emotion/react'),
          '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
          '@emotion/css': resolvePath('node_modules/@emotion/css'),
          'emotion-theming': resolvePath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
