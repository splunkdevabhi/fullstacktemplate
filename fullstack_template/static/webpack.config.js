const { Module } = require('webpack');
const webpack = require('webpack')

const config = {
    entry: __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js','.jsx','.css']
    }
};

Module.exports = config;
module: {
    rules: [
        {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }
    ]
}