'use strict';

var isGeneratorSupported = require( './../lib' );

var bool = isGeneratorSupported();
if ( bool ) {
	console.log( 'Environment has native generator function support.' );
} else {
	console.log( 'Environment lacks native generator function support.' );
}
