'use strict';

var webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html', // Load a custom template
    inject: 'body', // Inject all scripts into the body
    baseUrl: '/'
  }),
  new webpack.HotModuleReplacementPlugin()
];

var preloaders = [];


var entries = {
  'chunk1': './chunk1.js',
  'chunk2': './chunk2.js',
  'chunk3': './chunk3.js'
};

module.exports = {
  context: __dirname + '/src',

  entry: entries,

  output: {
    filename: '[name].js?[hash]',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },

  watchOptions: {
    aggregateTimeout: 100
  },

  module: {
    preLoaders: preloaders,
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.ts', '.js']
  },

  plugins: plugins,

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
