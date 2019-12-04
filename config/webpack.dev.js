const merge = require('webpack-merge');
var baseConfig = require('./webpack.base');


module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        port: 3100,
        open: true,
        hot: true,
        contentBase: './build',
        proxy: {
            '/api': {
                target: "http://localhost:3000"
            }
        }
    },
    devtool: "inline-source-map"
});
