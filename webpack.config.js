module.exports = {
	watch: true,
	entry: './out/index.js',
	output: {
		path: __dirname,
		filename: './index.js',
		libraryTarget: 'jsonp',
		// library: '__module__'
	},

	mode: 'none',

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
	}
};
