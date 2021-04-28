/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
  // on('file:preprocessor', webpack({
  //  webpackOptions: require('@vue/cli-service/webpack.config'),
  //  watchOptions: {}
  // }))

  // import Vue CLI environment variables into Cypress
  // original code at https://github.com/vuejs/vue-cli/issues/2447
  // ex. `VUE_APP_BASE_URL` can be fetched through `Cypress.env('BASE_URL')`
  Object.entries(process.env)
    .filter(([key]) => key.startsWith('VUE_APP'))
    .forEach(([key, value]) => {
      config.env[key.replace('VUE_APP_', '')] = value;
    });

  return Object.assign({}, config, {
    fixturesFolder: 'tests/integration/fixtures',
    integrationFolder: 'tests/integration/specs',
    screenshotsFolder: 'tests/integration/screenshots',
    videosFolder: 'tests/integration/videos',
    supportFile: 'tests/integration/support/index.js',
  });
};
