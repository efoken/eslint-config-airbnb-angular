module.exports = {
  extends: ['eslint-config-airbnb-base', './rules/angular'].map(require.resolve),
  settings: {
    // Append 'ts' extension to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.json'],
      },
    },
    // Append 'ts' extension to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.mjs'],
  },
  rules: {},
};
