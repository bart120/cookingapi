var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].build.js'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};