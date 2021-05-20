const glob = require('glob');
const path = require('path');

let webpackConfigList = [];
const jsEntries = glob.sync('./src/*.js');
for (let jsEntryIndex in jsEntries) {
	let jsEntry = jsEntries[jsEntryIndex];
	let jsName = path.basename(jsEntry);
	let config = {
		module: {
			rules: [
				{
					exclude: /(node_modules)/,
				}
			]
		},
		output: {
			path: path.resolve(__dirname, './dist/js')
		}
	};
	config.entry = jsEntry;
	config.output.filename = jsName;
	webpackConfigList.push(config);
}

module.exports = webpackConfigList;