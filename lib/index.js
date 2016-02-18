'use strict';

// MODULES //

var evil = require( 'utils-eval' );


// TEST //

/**
* FUNCTION: test()
*	Tests for native `function*()` support.
*
* @returns {Boolean} boolean indicating if an environment has native `function*()` support
*/
function test() {
	var bool;
	try {
		evil( '"use strict"; (function* () {})' );
		bool = true;
	} catch ( err ) {
		bool = false;
	}
	return bool;
} // end FUNCTION test()


// EXPORTS //

module.exports = test;
