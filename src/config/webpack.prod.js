const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: "source-map",
    // externals: {
    //     "react": "react"
    // }
});
