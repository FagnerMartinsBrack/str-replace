var maybeIgnoringCase = function( string, definitionContext ) {
  if ( definitionContext.ignoringCase ) {
    return string.toLowerCase();
  }
  return string;
};

var CreateReplaceDefinition = function( replaceAlgorithm ) {
  var ReplaceDefinition = function( occurrences ) {
    var definitionContext = this;
    return {
      ignoringCase: function() {
        return ReplaceDefinition.call({
          ignoringCase: true
        }, occurrences );
      },
      from: function( target ) {
        return ReplaceOperation(function executeReplace( replacement ) {
          return replaceAlgorithm.call( definitionContext, occurrences, replacement, target );
        });
      }
    };
  };
  return ReplaceDefinition;
};

var ReplaceOperation = function( replaceExecution ) {
  return {
    with: replaceExecution
  };
};

var replaceAll = CreateReplaceDefinition(function( occurrences, replacement, target ) {
  var template;
  var index = -1;
  if ( this.ignoringCase ) {
    template = occurrences.toLowerCase();
    while((
      index = target
        .toLowerCase()
        .indexOf(
          template,
          index === -1 ? 0 : index + replacement.length
        )
      ) !== -1 ) {
      target = target
        .substring( 0, index ) +
          replacement +
        target.substring( index + replacement.length );
    }
    return target;
  }
  return target.split( occurrences ).join( replacement );
});

var replace = CreateReplaceDefinition(function( occurrences, replacement, inputTarget ) {
  var template = maybeIgnoringCase( occurrences, this );
  var target = maybeIgnoringCase( inputTarget, this );
  var firstIndexOfTemplate = target.indexOf( template );
  return inputTarget.substring( 0, firstIndexOfTemplate ) +
    replacement +
    inputTarget.substring( firstIndexOfTemplate + replacement.length );
});

replace.all = replaceAll;

module.exports = replace;
