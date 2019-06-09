const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "/bundle"),
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }   
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        })
    ]
};