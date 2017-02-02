const config = {
  context: __dirname,
  entry: './app.js',
  output: {
    path: __dirname + '/build',
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
  },
  rules: [{
      test: /\.scss$/,
      use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
  }]
}

module.exports = config;
