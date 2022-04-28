const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common.js");

module.exports = merge(webpackCommon, {
	mode: "production",
	module: {
		rules: [
			{
				/* babel loader */
				test: /\.js$/,
				exclude: "/node_modules/",
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				],
			},
		],
	},
});
