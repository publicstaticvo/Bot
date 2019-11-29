var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var VueLoaderPlugin = require("vue-loader/lib/plugin");

var config = {
	devtool: "source-map",
	entry: {
		main: './src/main',
	},
	output: {
		path: path.join(__dirname,'/dist'),
		publicPath: "/",
		filename: "main.js",
	},
	module:{
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ExtractTextPlugin.extract({
							use: 'css-loader',
							fallback: 'vue-style-loader',
						}),
					},
				},
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader',
				})
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('main.css'),
		new VueLoaderPlugin(),
	],
};
module.exports=config;
