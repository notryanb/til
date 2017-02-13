const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


const apiConfig = {
  entry: [
    'babel-polyfill',
    path.resolve(ROOT_PATH, 'api/src/server'),
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'api/build'),
    filename: 'api-bundle.js'
  },
  devtool: 'source-map',
  target: 'node',
  externals: nodeModules,
  resolve: { extensions: ['.js'] },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: __dirname,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0']
          }
        }]
      }
    ]
  }
}

const reactConfig = {
  entry: [
    path.resolve(ROOT_PATH, 'app/src/index'),
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'app-bundle.js'
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
        exclude: /node_modules/,
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

module.exports = [apiConfig, reactConfig];
