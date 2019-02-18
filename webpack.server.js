const merge = require('webpack-merge')
const config = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals')
const Path = require('path')
//浏览器端才需要打包，服务器端不需要打包,所以需要声明：
//target: 'node' ,还需要 externals: [nodeExternals()]

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()]
}

module.exports = merge(config, serverConfig)
