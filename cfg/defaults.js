/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';
const host = require('./utils');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
      },
      {
        test: /\.sass/,
        loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: "imgs/[name].[ext]"
        }
      },
      {
        test: /\.(mp3|mp4)$/,
        loader: 'file-loader',
        query: {
          name: "media/[name].[ext]"
        }
      },
      {
        test: /\.(woff|woff2|ogg|svg)$/,
        loader: 'file-loader',
        query: {
          name: "fonts/[name].[ext]"
        }
      }
    ]
  }
    ;
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  host: host.ip,
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
