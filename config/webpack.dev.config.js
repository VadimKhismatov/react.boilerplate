const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = paths => {
  return {
    devtool: 'source-map',
    devServer: {
      port: 8080,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            publicPath: '../',
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader'],
          }),
        },
        {
          test: /\.css$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader'],
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
          ],
        },
      ],
    },
  };
};
