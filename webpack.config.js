const config = {
  entry: [
      './app/src/index.js'
    ],
  output: {
    path: __dirname + '/app/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './app/build'
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
