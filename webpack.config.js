const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const dev = process.env.NODE_ENV === "dev"


let config = {
    entry: './src/index.js',
    watch: dev,
    output : {
        path: path.resolve('dist'),
        filename: dev ? '[name].js' : '[name].[chunkhash:8].js'
    },
    devtool: dev ? "cheap-module-eval-source-map" : "source-map",
    module: {
        rules: [
            {   test: /\.js$/, 
                exclude: /node_modules|bower_components/,
                use: [
                    'babel-loader'
                ]
            },
            {   test: /\.jsx$/, 
                exclude: /node_modules|bower_components/,
                use: [
                    'babel-loader'
                ]
            
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: [
                        'css-loader', 
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () { // post css plugins, can be exported to postcss.config.js
                                    return [
                                      require('precss'),
                                      require('autoprefixer')
                                    ];
                                }
                            }
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig, 
        new ExtractTextPlugin({
            filename:  dev ? '[name].css' : '[name].[contenthash:8].css',
            disable: dev
        })
    ]
}
if (!dev) {
    config.plugins.push(new UglifyPlugin({
        sourceMap: true
    }))
}
module.exports = config 