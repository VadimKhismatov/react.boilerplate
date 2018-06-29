
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = (paths) => {
    return {
        devtool: "source-map",
        devServer: {
            port: 8080,
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        publicPath: "../",
                        fallback: "style-loader",
                        use: [
                            "css-loader",
                            "postcss-loader",
                            "sass-loader"
                        ],
                    }),
                },
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            "css-loader",
                            "postcss-loader"
                        ],
                    }),
                },
                {
                    test: /\.(eot|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    },
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: 'img/[name].[ext]'
                            }
                        },
                        /* {
                            loader: "image-webpack-loader",
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                webp: {
                                    quality: 75
                                }
                            }
                        } */
                    ]

                },
            ]
        }
    }
};