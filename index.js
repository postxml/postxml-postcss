var postcss = require('postcss');

module.exports = function (options) {
	
	options = options || {};
	options.plugins = options.plugins || [];
	options.postcss = options.postcss || {};
	
	var processor = postcss(options.plugins);
	
	return function ($) {
		$('style').contents().each(function(index, style) {
			var prefixed = processor.process(style.data, options.postcss).css;
			style.data = prefixed;
		});
		$('[style]').each(function(index, element) {
			var prefixed = processor.process(element.attribs.style, options.postcss).css;
			element.attribs.style = prefixed;
		});
	};
};
