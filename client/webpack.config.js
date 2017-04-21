var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
        "./app.js"
    ],
    debug: true,
    devtool: 'source-map',
    output: {
        publicPath: "minified/scripts/",
        path: __dirname + "/minified/scripts/",
        filename: "[name].js",
        chunkname: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, '../'),
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.html$/,
                loader: "handlebars-loader",
                query: {
                    helperDirs: [
                        __dirname + "/template-helpers"
                    ]
                }
            },
            {
                test: /\.handlebars/,
                loader: "handlebars-loader",
                query: {
                    helperDirs: [
                        __dirname + "/template-helpers"
                    ]
                }
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.resolve('./apps'),
            path.resolve('./custom'),
            path.resolve('./node_modules/blinx-extensions/lib'),
            path.resolve('./node_modules/blinx-modules/lib')
        ],
        alias: {
            "root": path.resolve("./"),
            "apps": path.resolve("./src/apps"),
            "common": path.resolve("./src/common"),
            "common_entensions": path.resolve("./src/common/extensions"),
            "common_modules": path.resolve("./src/common/modules"),
            "blinx_extensions": path.resolve("./node_modules/blinx-extensions/lib"),
            "blinx_modules": path.resolve("./node_modules/blinx-modules/lib"),
            "minified": path.resolve("./minified")
        },
        extensions: ['', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Blinx Boilerplate',
            template: './index.ejs',
            inject: 'body',
            filename: '../../index.html'
        }),
        new webpack.optimize.DedupePlugin(),
        new CleanWebpackPlugin(['scripts'], {
            root: path.resolve("./minified"),
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "shared",
            minChunks: Infinity
        })
    ]
};