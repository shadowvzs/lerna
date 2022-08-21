const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.jsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        alias: {
            "@shadowvzs/header": path.resolve(__dirname, "../header/src/"),
            "@shadowvzs/footer": path.resolve(__dirname, "../footer/src/"),
            "@shadowvzs/utility": path.resolve(__dirname, "../utility/"),
            "@shadowvzs/dto": path.resolve(__dirname, "../dto/"),
            "@shadowvzs/api": path.resolve(__dirname, "../api/"),
            "@shadowvzs/config": path.resolve(__dirname, "../config/")
        },
        extensions: ['.jsx', '.ts', '.tsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
};