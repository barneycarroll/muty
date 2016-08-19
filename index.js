function muty( options, target, callback ){
	var observer = new MutationObserver( callback )

	observer.observe( target, options )

	return observer
}

muty.options = {
	childList             : true
	,
	attributes            : true
	,
	characterData         : true
	,
	subtree               : true
	,
	attributeOldValue     : true
	,
	characterDataOldValue : true
	// ,
	// attributeFilter    : []
}

if (typeof module == 'object' )
	module.exports = muty

else if (typeof define == 'function')
	define( function(){ return muty })

else if (typeof window == 'object')
	window.muty = muty
