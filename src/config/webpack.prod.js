import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base';

export default merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map'
    // externals: {
    //     "react": "react"
    // }
});
