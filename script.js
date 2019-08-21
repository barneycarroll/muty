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

try {
  module.exports = muty
}catch(e){}
