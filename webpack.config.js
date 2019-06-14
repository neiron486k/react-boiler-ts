const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: process.env.APP_ENV || 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        // options: {},
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new Dotenv({
            defaults: true,
            systemvars: true,
            silent: true,
            safe: true
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        noInfo: true
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[contenthash].js'
    },
    stats: {
        children: true,
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
