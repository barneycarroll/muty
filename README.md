# muty

An attempt at a more intuitive API wrapper around W3C DOM MutationObserver

```javascript
var nodeObserver = muty( {
	childList : true,
	subtree   : true
},
	document,
	mutations => {
		// ...
	}
)
```

For convenience, an object with all valid boolean options set to `true` is included as `muty.options`. This allows blanket coverage via:

```javascript
muty( muty.options, document, callback )
```
