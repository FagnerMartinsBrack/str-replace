var escapeRegexSpecialChars = require("escape-string-regexp");

var replaceAlgorithm = function(occurrences, replacement, inputTarget) {
  var flags = [];
  if (this.ignoringCase) {
    flags.push("i");
  }
  var regex = new RegExp(escapeRegexSpecialChars(occurrences), flags.join(""));
  return inputTarget.replace(regex, replacement);
};

var replaceAllAlgorithm = function(occurrences, replacement, inputTarget) {
  var flags = ["g"];
  if (this.ignoringCase) {
    flags.push("i");
  }
  var regex = new RegExp(escapeRegexSpecialChars(occurrences), flags.join(""));
  return inputTarget.replace(regex, replacement);
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

var replaceAll = CreateReplaceDefinition(replaceAllAlgorithm);
var replace = CreateReplaceDefinition(replaceAlgorithm);

replace.all = replaceAll;

module.exports = replace;
