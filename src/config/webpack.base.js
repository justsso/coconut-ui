// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { CheckerPlugin } = require('awesome-typescript-loader');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        app: [
            path.join(__dirname + './../index.tsx'),
            path.join(__dirname + './../public/index.html')
        ]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, '../../build')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // exclude: /node_modules/
            },
            // { test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            }
        ]
    },
    // externals: {
    //     "react": "React",
    //     'react-dom': 'ReactDOM'
    // },
    plugins: [
        // new CleanWebpackPlugin(),
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css',
            chunkFilename: '[id].css'
        })
    ],
    externals: {
        fs: "commonjs fs"
    }
};
