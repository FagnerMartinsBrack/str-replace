var replaceAlgorithm = require("./replace-algorithm");
var replaceAllAlgorithm = require("./replace-all-algorithm");

var CreateReplaceDefinition = function(replaceAlgorithm) {
  var ReplaceDefinition = function(occurrences) {
    var definitionContext = this;
    return {
      ignoringCase: function() {
        return ReplaceDefinition.call({
          ignoringCase: true
        }, occurrences);
      },
      from: function(target) {
        return ReplaceOperation(function executeReplace(replacement) {
          return replaceAlgorithm.call(definitionContext, occurrences, replacement, target);
        });
      }
    };
  };
  return ReplaceDefinition;
};

var ReplaceOperation = function(replaceExecution) {
  return {
    with: replaceExecution
  };
};

var replaceAll = CreateReplaceDefinition(replaceAllAlgorithm);
var replace = CreateReplaceDefinition(replaceAlgorithm);

replace.all = replaceAll;

module.exports = replace;
