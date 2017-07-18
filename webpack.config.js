'use strict';

const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        main: ['./react-style-comp.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-style-comp.js',
        library: 'react-style-comp',
        libraryTarget: 'umd'
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'node_modules/postcss-prefix-selector/'),
                    path.join(__dirname, 'node_modules/postcss/')
                ]
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname),
        disableHostCheck: true
    }
};
