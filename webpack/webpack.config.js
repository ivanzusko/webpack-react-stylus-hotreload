'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var poststylus = require('poststylus');

module.exports = {
    debug: true,
    // devtool: 'source-map',
    devtool: 'eval-source-map',
    entry: {
        main: [
            'webpack-hot-middleware/client?reload=true',
            path.join(__dirname, '../src/main.js'),
            /* it's possible to add more then one file to entry point */
            // path.join(__dirname, 'app/js/initial-modal.js'),
            // path.join(__dirname, 'app/js/dice.js'),
        ],
        /* and it is possible to make multiple entries */
        // admin: path.join(__dirname, 'src/admin.js'),
    },

    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html', // add html template
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name].css'),
    /* to get more then one builded output */
        // new HtmlWebpackPlugin({
        //     template: 'src/admin.tpl.html',
        //     inject: 'body',
        //     filename: 'admin.html'
        // }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    "presets": ["react", "es2015", "stage-0", "react-hmre"]
                }
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            /* next is not neccessary for hot reloading, because we have ExtractTextPlugin */
            // {
            //     test: /\.css$/,
            //     loader: 'style!css'
            // },
            {
    			test: /\.styl$/,
    			loader: ExtractTextPlugin.extract("style-loader","css-loader!stylus-loader")
    		}
        ]
    },
    stylus: {
        use: [
            poststylus([
                'autoprefixer',
                // 'rucksack-css'
            ])
        ],
		// import: path.join(__dirname,'../src/stylus/*')
	}
};
