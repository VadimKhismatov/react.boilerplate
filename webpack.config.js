const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const devConfig = require('./config/webpack.dev.config');
const prodConfig = require('./config/webpack.prod.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const paths = {
  src: path.join(__dirname + '/src'),
  dist: path.join(__dirname + '/dist'),
};

const common = merge([
  {
    entry: `${paths.src}/app/index.js`,
    output: {
      path: paths.dist,
      filename: './js/app.bundled.js',
    },
    resolve: {
      extensions: ['.js', ' ', '.jsx', '.css', '.scss'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        // {
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     use: ['babel-loader', 'eslint-loader']
        // },
        {
          test: /\.(eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.src + '/index.html',
        filename: './index.html',
      }),
      new ExtractTextPlugin('./css/[name].css'),
    ],
  },
]);

module.exports = env => {
  if (env === 'production') {
    return merge([common, prodConfig()]);
  }
  if (env === 'development') {
    return merge([common, devConfig()]);
  }
};
