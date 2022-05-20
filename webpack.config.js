const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
	watch: true,
	entry: './out/src/index.js',
	target: 'web',
	output: {
		path: __dirname,
		filename: './index.js',
		libraryTarget: 'assign',
		library: 'module.exports',
	},

	mode: 'production',

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					compress: {
						ecma: 2020,
						negate_iife: false,
						arrows: true,
						arguments: true,
						dead_code: true,
						keep_fargs: false,

						unsafe: true,
						unsafe_arrows: true,
						unsafe_comps: true,
						unsafe_math: true,
						unsafe_methods: false,
						unsafe_undefined: true,
					},

					format: {
						beautify: true,
						ecma: 2020,
						comments: false,
					},

					mangle: {},
				},
			}),
		]
	},
	externals: [{
		'fc-premium-core': 'fcpremium',
	},

	function (context, request, callback) {
		const exp = /^@fc-lib\/(.*)$/.exec(request);

		if (exp !== null && exp[1].length !== 0)
			return callback(null, `fcpremium.Core.libraries.import('${exp[1]}')`);

		callback();
	}
	],

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
	}

};
