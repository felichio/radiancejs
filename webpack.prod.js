const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "production",
    entry: {
        app: "./source/exporter.js",
        
    },
    output: {
        libraryTarget: 'umd',
        globalObject: 'this',
        library: "r",
        filename: "radiance.js",
        path: path.resolve(__dirname, 'dist'),
    },

};