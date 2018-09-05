/* eslint fp/no-mutation:0, import/no-commonjs:0 */

const config = require('@nod/webpack-devops-config')

const dir = () => __dirname

module.exports = config(dir)
