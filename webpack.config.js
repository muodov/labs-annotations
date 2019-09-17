var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');

module.exports = {
    entry: './client/app.js',
    devtool: 'cheap-module-source-map',
    // devServer: {
    //     lazy: true,
    //     filename: 'bundle.js'
    // },
    output: {
        // filename: '[name].[chunkhash].js',
        filename: 'app.js',
        path: path.resolve(__dirname, 'build'),
        pathinfo: true
    },
    plugins: [
        new ManifestPlugin()
    ],
    module: {
        rules: [{
            test: /\.scss$|\.sass$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    }
                },
                {
                    loader: "sass-loader" // compiles Sass to CSS
                }
            ]
        }]
    }
};
