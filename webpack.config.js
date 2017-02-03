const webpack = require('webpack');
const path = require("path");

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.html', '.js']
    },
    module: {
        rules:[
            {
                test: /\.html$/,
                loader: "html-loader",
                exclude:["node_modules/*"]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};