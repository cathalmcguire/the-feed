var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../dist');
var APP_DIR = path.resolve(__dirname, '../src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?/, include: APP_DIR, loader: 'babel' },
            { test: /\.less$/, include: APP_DIR, loaders: ['style', 'css', 'less'] }
        ]
    }
};

module.exports = config;
