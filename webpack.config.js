const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
// const HtmlwebpackPlugin = require('html-webpack-plugin');

// var nodeModules = {};
// fs.readdirSync('node_modules')
//   .filter(function(x) {
//     return ['.bin'].indexOf(x) === -1;
//   })
//   .forEach(function(mod) {
//     nodeModules[mod] = 'commonjs ' + mod;
//   });


// const appConfig = {
//   entry: [
//     'babel-polyfill',
//     path.resolve(ROOT_PATH, 'app/src/server'),
//   ],
//   output: {
//     path: path.resolve(ROOT_PATH, 'app/build'),
//     filename: 'server-bundle.js'
//   },
//   devtool: 'source-map',
//   target: 'node',
//   externals: nodeModules,
//   resolve: { extensions: ['.js'] },
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         include: __dirname,
//         exclude: /node_modules/,
//         use: [{
//           loader: 'babel-loader',
//           options: {
//             presets: ['es2015', 'stage-0']
//           }
//         }]
//       }
//     ]
//   }
// }

const reactConfig = {
  entry: [
    path.resolve(ROOT_PATH, 'app/src/views/index')
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'react-bundle.js'
  },
  // devServer: {
  //   contentBase: path.resolve(ROOT_PATH, 'app/build'),
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   progress: true,
  //   colors: true
  // },
  devtool: 'source-map',
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new HtmlwebpackPlugin({
  //     title: 'Listlogs'
  //   })
  // ],
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

module.exports = reactConfig;
