'use strict';

// Modules
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    devServer: {
      contentBase: './dist',
      stats: 'minimal'
    },
    devtool: 'source-map',
    module: {
      loaders:[{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
              presets: ['es2015']
            }
      },{
        test: /\.scss$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?sourceMap!sass-loader?sourceMap')
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Redline App",
        filename: 'index.html',
        template: './app/index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin("[name].css"),
      new CopyWebpackPlugin([
        {
          from: "app/templates",
          to: 'templates'
        }
      ]),
    ],
    cssLoader: {
      includePaths: [path.resolve(__dirname, "bower_components")]
    }
};
