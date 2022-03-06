const path = require('path')
const _ = require('lodash')
const envParser = require('./env-parser')

module.exports = (options, context) => {
  const npm_config_argv = process.env.npm_config_argv;
  let env = JSON.parse(npm_config_argv).cooked.pop().split(":").pop() || 'dev';
  let envList = context.isProd ? [env] : ['dev'];

  envParser.parse(context.sourceDir, envList)

  const pluginConfig = {
    define() {
      return {
        globalIsProd: context.isProd,
        globalUserDefinedEnvConstants: process.env,
      }
    },
    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
  }

  return pluginConfig
}
