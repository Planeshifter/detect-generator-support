Generator Support
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Detect native [`generator function`][generator-function] support.


## Installation

``` bash
$ npm install detect-generator-support
```


## Usage

``` javascript
var areGeneratorsSupported = require( 'detect-generator-support' );
```

#### areGeneratorsSupported()

Detects if a runtime environment supports ES2015 [`generator functions`][generator-function], i.e. `function*()`.

``` javascript
var bool = areGeneratorsSupported();
// returns <Boolean>
```


## Examples

``` javascript
var areGeneratorsSupported = require( 'detect-generator-support' );

var bool = areGeneratorsSupported();
if ( bool ) {
	console.log( 'Environment has native generator function support.' );
} else {
	console.log( 'Environment lacks native generator function support.' );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g detect-generator-support
```


### Usage

``` bash
Usage: hasgenerators [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```


### Examples

``` bash
$ hasgenerators
# => returns 'true' || 'false'
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Philipp Burckhardt.


[npm-image]: http://img.shields.io/npm/v/detect-generator-support.svg
[npm-url]: https://npmjs.org/package/detect-generator-support

[build-image]: http://img.shields.io/travis/Planeshifter/detect-generator-support/master.svg
[build-url]: https://travis-ci.org/Planeshifter/detect-generator-support

[coverage-image]: https://img.shields.io/codecov/c/github/Planeshifter/detect-generator-support/master.svg
[coverage-url]: https://codecov.io/github/Planeshifter/detect-generator-support?branch=master

[dependencies-image]: http://img.shields.io/david/Planeshifter/detect-generator-support.svg
[dependencies-url]: https://david-dm.org/Planeshifter/detect-generator-support

[dev-dependencies-image]: http://img.shields.io/david/dev/Planeshifter/detect-generator-support.svg
[dev-dependencies-url]: https://david-dm.org/dev/Planeshifter/detect-generator-support

[github-issues-image]: http://img.shields.io/github/issues/Planeshifter/detect-generator-support.svg
[github-issues-url]: https://github.com/Planeshifter/detect-generator-support/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[generator-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
