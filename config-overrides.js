const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    'common': './src/common',
  })(config)
  return config
}