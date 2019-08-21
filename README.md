# muty

[![Build Status](https://travis-ci.org/barneycarroll/muty.svg?branch=master)](https://travis-ci.org/barneycarroll/muty)

The W3C DOM [MutationObserver](https://developer.mozilla.org/en/docs/Web/API/MutationObserver) API is verbose and unintuitive. This wrapper makes DOM observation terse and obvious.

## What?

Exposes:

```html
<script src=//unpkg.com/muty/script.js></script>
<script src=//unpkg.com/muty/module.js type=module></script>
```

```javascript
import muty from 'muty'
// or
var muty = require('muty')
```

```javascript
// A single function for mutation observation
muty( options, element, callback ) // => MutationObserver

// An options object with all boolean flags set to true for broad capture
muty.options
```

Allowing:

```javascript
// Blanket logging of all DOM mutations
muty( muty.options, document, function( records ){ console.log( records ) } )

// In application code, maybe something like this
var editor = document.querySelector( '[contenteditable]' )

muty(
  { characterData : true, subtree : true } ,
  editor,
  function( mutations, observer ){
    editor.classList.add( 'changed' )

    observer.disconnect()
  }
)
```

## What not?

* A MutationRecord processor, or any kind of higher-level abstraction. Use [Mutation Summary](https://github.com/rafaelw/mutation-summary) instead.
* A MutationObserver polyfill for non-supporting browsers. Use [Mutation Watcher](https://github.com/virtyaluk/mutation-watcher) instead.
* [A perfect API](https://james-forbes.com/?/posts/the-perfect-api):
  * [Curry](https://www.npmjs.com/package/lodash.curry) it if you want intermediary partially applied observers.
  * Use [flyd](https://www.npmjs.com/package/flyd) (for [Fantasy Land](https://github.com/fantasyland/fantasy-land) streams) or [Bluebird](http://bluebirdjs.com/docs/api/promise.promisify.html) (for Promises) if you have opinionated async data flow requirements.
