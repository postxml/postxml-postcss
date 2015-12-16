# postxml-postcss
[![npm version][npm-image]][npm-url]

> [PostXML] plugin for processing inline css in html using Postcss.

## Installation
`npm i postxml-postcss --save-dev`

## Usage
[Postxml]

## Options

### plugins
Array of postcss [plugins](https://github.com/postcss/postcss/blob/master/docs/api.md#postcssplugins).<br>
Type: Array<br>
Default: []

### postcss
Postcss [options](https://github.com/postcss/postcss#options).<br>
Type: Object<br>
Default: {}

## Example

### Input
```html
<div style="display:flex;"></div>
```

### Output
```html
<div style="display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;"></div>
```

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-postcss
[npm-image]: http://img.shields.io/npm/v/postxml-postcss.svg?style=flat-square