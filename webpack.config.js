const config = {
  context: __dirname,
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: __dirname,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }]
  }
}

module.exports = config;
