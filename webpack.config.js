var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');

module.exports = {
    entry: './client/app.js',
    devtool: 'cheap-module-eval-source-map',
    output: {
        // filename: '[name].[chunkhash].js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
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
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                },
                {
                    loader: "sass-loader" // compiles Sass to CSS
                }
            ]
        }]
    }
};
