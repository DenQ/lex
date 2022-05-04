const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    common: './src/common',
    lib: './src/lib',
  })(config);
  return config;
};
