const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = paths => {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            publicPath: '../',
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                },
              },
              {
                loader: 'postcss-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
          }),
        },
        {
          test: /\.css$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                },
              },
              {
                loader: 'postcss-loader',
              },
            ],
          }),
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]',
              },
            },
            // {
            //   loader: 'image-webpack-loader',
            //   options: {
            //     mozjpeg: {
            //       progressive: true,
            //       quality: 65,
            //     },
            //     // optipng.enabled: false will disable optipng
            //     optipng: {
            //       enabled: true,
            //     },
            //     pngquant: {
            //       quality: '65-90',
            //       speed: 4,
            //     },
            //     gifsicle: {
            //       interlaced: false,
            //     },
            //     // the webp option will enable WEBP
            //     webp: {
            //       quality: 75,
            //     },
            //   },
            // },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            mangle: {
              keep_fnames: true,
            },
          },
        }),
      ],
    },
    plugins: [new OptimizeCssAssetsPlugin()],
  };
};
