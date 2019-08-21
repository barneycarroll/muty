var tape = require( 'tape' )
var muty = require( './script.js' )

tape( 'Provides a valid options hash at `muty.options`', function( t ){
	t.equal( typeof muty.options, 'object' )

	t.end()
} )

tape( 'Consumes a valid options hash, a DOM element, and a callback function', function( t ){
	t.doesNotThrow( function(){
		muty( muty.options, document, function(){} )
	} )

	t.end()
} )

tape( 'Returns a MutationObserver', function( t ){
	t.ok( muty( muty.options, document, function(){} ) instanceof MutationObserver )

	t.end()
} )

tape( 'Provided default options, invokes callback after any DOM mutation', function( t ){
	var called = false

	muty( muty.options, document, function(){
		called = true
	} )

	t.equals( called, false )

	document.body.appendChild( document.createTextNode( '' ) )

	setTimeout( function(){
		t.equals( called, true )

		t.end()
	} )
} )
