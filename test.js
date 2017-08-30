const createRenderServer = require('maily');
const request = require('request');
const fs = require('fs');

const htmlComponents = require('./components/html/index');
const textComponents = require('./components/text/index');

const log = (level, message) => {
};
let generationLatch = 0;
let total = 0;
const errors = [];
const dir = 'test-results';
let timeout;

const testPort = Number(process.env.PORT) || 3333;
const host = process.env.HOST || 'localhost';

const die = () => {
	setTimeout(process.exit, 1500);
};

const finish = () => {
	console.log('All done! Shutting down.');
	if (errors.length === 0 && generationLatch === total) {
		die();
	} else {
		console.error('Some errors occurred');
		console.error(errors);
		process.exit(1);
	}
};

const runTestOverComponents = (components, type) => {
	Object.keys(components).forEach(e => {
		const httpRequest = request.post(`http://${host}:${testPort}/${e}.${type}`);
		httpRequest.pause();
		fs.createReadStream(`json/${e}.json`)
			.pipe(httpRequest)
			.on('error', (err) => {
				console.error('Well that went wrong', err);
				errors.push(err)
			})
			.pipe(fs.createWriteStream(`${dir}/${e}.${type}`))
			.on('finish', () => {
				generationLatch = generationLatch + 1;
				console.log(`Finished example ${e}.${type}`);
				if (generationLatch === total) {
					finish();
				}
			});
		httpRequest.resume();
		httpRequest.on('response', (resp) => {
			if (resp.statusCode !== 200) {
				errors.push(`${e}.${type} threw an error ${resp.statusCode}`);
			}
		});

	});
};

const runTestSuite = () => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
		console.log('Directory created');
	}
	const newLine = '<br>';
	const htmlLinks = Object.keys(htmlComponents).sort().map(comp => `<a href="${comp}.html?v=${Math.random()}">${comp}.html</a>`);
	const textLinks = Object.keys(textComponents).sort().map(comp => `<a href="${comp}.txt?v=${Math.random()}">${comp}.txt</a>`);
	const links = htmlLinks.concat(textLinks);
	total = links.length + htmlLinks.length;
	const content = `<html><body><h1>Email template examples</h1><p><strong>Generated at ${new Date()} for commit ${process.env.COMMIT}</strong><br /><br />${links.join(newLine)}</p></body></html>`;
	fs.writeFile(`${dir}/index.html`, content, (err) => {
		if (err) throw err;
		console.log('Index file created');
	});
	runTestOverComponents(htmlComponents, 'html');
	runTestOverComponents(htmlComponents, 'mjml');
	runTestOverComponents(textComponents, 'txt');
	timeout = setTimeout(() => {
		console.error('Timeout reached!');
		finish();
	}, 10 * 1000);
};

createRenderServer(htmlComponents, textComponents, log).listen(testPort, runTestSuite);
