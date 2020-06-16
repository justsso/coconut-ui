// eslint-disable-next-line @typescript-eslint/no-require-imports
const merge = require('webpack-merge');
// eslint-disable-next-line @typescript-eslint/no-require-imports
let baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 3100,
        open: true,
        hot: true,
        contentBase: './build',
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            }
        },
        historyApiFallback: true
    },
    devtool: 'inline-source-map'
});
