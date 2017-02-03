const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);

const config = {
  entry: [
    path.resolve(ROOT_PATH, 'app/src/index'),
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Listlogs'
    })
  ],
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: __dirname,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'react', ['es2015', { modules: false }]
            ]
          }
        }]
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}

module.exports = config;
