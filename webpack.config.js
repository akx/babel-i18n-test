module.exports = {
	entry: './index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
						plugins: [
							'syntax-jsx',
							[
								'babel-extract-gettext', {
									outputFile: __dirname + '/js.pot',
								},
							],
						],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
};