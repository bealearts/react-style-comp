'use strict';

const path = require('path');

module.exports = {
    context: path.join(__dirname),
    entry: {
        main: ['./app.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname)
    }
};
