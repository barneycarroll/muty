var tape = require( 'tape' )
var muty = require( './index' )

tape( 'Provides an options hash at `muty.options`', function( t ){
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
