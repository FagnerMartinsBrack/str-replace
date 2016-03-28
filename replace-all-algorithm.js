var escapeRegexSpecialChars = require("escape-string-regexp");
var partial = require("partial-application").partial;

module.exports = partial(function(occurrences, replacement, inputTarget) {
  var flags = ["g"];
  if (this.ignoringCase) {
    flags.push("i");
  }
  var regex = new RegExp(escapeRegexSpecialChars(occurrences), flags.join(""));
  return inputTarget.replace(regex, replacement);
});
