export default Object.assign(
  (options, target, callback) => {
    const observer = new MutationObserver( callback )

    observer.observe( target, options )

    return observer
  }, {
    options : {
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
  },
)

