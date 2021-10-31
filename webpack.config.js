const path = require('path');

const clientConfig = {

	name: 'client',
	target: 'web',
	entry: {
		filename: 'index.ts',
		path: path.resolve('src')
	},
	module: {
		rules: [
			{
				test: /\.ts?x$/,
				use: 'ts-loader'
			}
		]
	}
};

const serverConfig = {

	name: 'server',
	target: 'node',
	entry: {
		filename: 'server.ts',
		path: path.resolve('server')
	},
	output: {
		filename: 'server.js'
	},
	module: {
		rules: [
			{
				test: /\.ts?x$/,
				use: 'ts-loader'
			}
		]
	}
};

module.exports = [clientConfig, serverConfig];