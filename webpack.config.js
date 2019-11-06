const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var path = require('path');
var __layouts = './public/scripts/layouts/';

module.exports = {
    context: __dirname,
    entry: {
        index: './public/scripts/index.jsx'
    },
    output: {
        path: path.join(__dirname + '/public/scripts/bundles/'),
        filename: '[name].js',
        devtoolModuleFilenameTemplate: '[resourcePath]',
        devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'fast-sass-loader']
            }
        ]
    },
    devtool: 'source-maps',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
