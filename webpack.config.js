const path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})


module.exports = {
    entry: './src/index.js',
    output : {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
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
                use: [
                    {
                    loader: "style-loader" // creates style nodes from JS strings
                    }, {
                    loader: "css-loader" // translates CSS into CommonJS
                    }, {
                    loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, new UglifyPlugin()]
}