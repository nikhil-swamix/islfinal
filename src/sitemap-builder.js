require('babel-register');

const router = require('./App').default;
const Sitemap = require('../public').default;

(
	new Sitemap(router)
		.build('http://islec.edu.in')
		.save('./sitemap.xml')
);