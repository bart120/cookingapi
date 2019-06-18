let path = require("path");
let webpack = require("webpack");

module.exports = {
    entry: {
        app: './src/app.js'
        //lib: './src/lib.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].build.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};