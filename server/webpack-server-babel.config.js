/* eslint-disable */
'use strict';

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

// Calculate external dependencies for Webpack. Webpack searches for these
// packages in the node_modules instead of packing them into the bundle.
var nodeModules = {};
fs.readdirSync('node_modules')
  .forEach(function(mod) {
    if (mod !== '.bin') {
      nodeModules[mod] = 'commonjs ' + mod;
    }
  });

// We need this webpack config to build server code with babel for
// production because running the `babel` from `babel-cli` compile
// command fails when we attempt to require modules from the `app/`
// directory from the `server/` directory. It does not fail when
// using this webpack config.
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
    ],
  },
  debug: process.env.TIER === 'production' ? false : true,
  entry: ['babel-polyfill', './index.js'],
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  node: {
    __dirname: true,
    __filename: true,
  },
  externals: nodeModules,
};
