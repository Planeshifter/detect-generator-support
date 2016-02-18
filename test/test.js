'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var detect = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof detect === 'function', 'main export is a function' );
	t.end();
});

tape( 'feature detection result is a boolean', function test( t ) {
	t.ok( typeof detect() === 'boolean', 'detection result is a boolean' );
	t.end();
});

tape( 'if `function*()` is supported, detection result is `true`', function test( t ) {
	var detect = proxyquire( './../lib', {
		'utils-eval': stub
	});

	t.ok( detect(), 'detection result is `true`' );
	t.end();

	function stub() {
		return 'beep';
	}
});

tape( 'if `function*()` is not supported, detection result is `false`', function test( t ) {
	var detect = proxyquire( './../lib', {
		'utils-eval': stub
	});

	t.notOk( detect(), 'detection result is `false`' );
	t.end();

	function stub() {
		throw new Error( 'boop' );
	}
});
