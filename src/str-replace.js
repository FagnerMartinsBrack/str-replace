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
    to: replaceExecution
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

var replace = CreateReplaceDefinition(function( occurrences, replacement, target ) {
  return target.replace( occurrences, replacement );
});

replace.all = replaceAll;

module.exports = replace;
