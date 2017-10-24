var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './index.js',
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'devBundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jQuery',
            'window.$': 'jQuery',
            'jQuery': 'jQuery',
            '$': 'jQuery'
        })
    ],
    module:{
        loaders:[{
            test: /\.css$/,
            loaders: 'style-loader!css-loader'
        }]
    },
    devServer: {

    }
}