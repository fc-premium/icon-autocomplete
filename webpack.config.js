const path = require('path');

const MATCH_ALL_NON_RELATIVE_IMPORTS = /^\w.*$/i;

module.exports = {
	watch: true,
	entry: './out/src/index.js',
	target: 'web',
	output: {
		path: __dirname,
		filename: './index.js',
		libraryTarget: 'commonjs2',
		// library: '__module__'
	},

	mode: 'production',

	optimization: {
		minimize: false
	},

	module: {
		rules: [{
			test: /\.(txt|css)$/,
			use: [{
				loader: 'raw-loader',
			}]
		}]
	},

	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, 'assets/')
		}
	},

	externals: MATCH_ALL_NON_RELATIVE_IMPORTS
};
