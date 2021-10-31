const path = require('path');
const { dirname } = require('path/posix');

const clientConfig = {

	name: 'client',
	target: 'web',
	entry: './src/index.tsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.ts?x$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.css']
	}
};

const serverConfig = {

	name: 'server',
	target: 'node',
	entry: './server/server.tsx',
	output: {
		filename: 'server.js',
		path: __dirname
	},
	module: {
		rules: [
			{
				test: /\.ts?x$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.css']
	}
};

module.exports = [clientConfig, serverConfig];