module.exports = {
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'babel-preset-stage-0', ['env', {
          targets: {
            browsers: ['last 2 version']
          }
        }]],
        "plugins":["transform-class-properties"]
      }
    }]
  }
}
