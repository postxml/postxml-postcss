var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

	var processed = postxml([plugin(opts)]).process(input);

	expect(processed).to.eql(output);
};

describe('postxml-postcss', function () {
	it('style attr', function () {
		test(
			'<div style="display:flex;"></div>',
			'<div style="display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;"></div>',
			{
				plugins: [
					require('autoprefixer')()
				]
			}
		);
	});
	it('style tag', function () {
		test(
			'<style>display:flex;</style>',
			'<style>display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;</style>',
			{
				plugins: [
					require('autoprefixer')()
				]
			}
		);
	});
});
