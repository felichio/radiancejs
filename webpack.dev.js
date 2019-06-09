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
        library: "r",
        filename: "radiance.js",
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Radiance Testing",
            filename: `${path.resolve(__dirname, "test")}/radiance.html`,
            template: `${path.resolve(__dirname, "test")}/index.html`
        })
    ],

    
};