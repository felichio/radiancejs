const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: {
        app: "./source/exporter.js",
    },
    output: {
        libraryTarget: 'umd',
        globalObject: 'this',
        library: "R",
        filename: "radiance.js",
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Radiance Testing",
            filename: "../test/radiance.html",
            template: "./index.html"
        })
    ],

    
};