var escapeRegexSpecialChars = require("escape-string-regexp");

module.exports = function(occurrences, replacement, inputTarget) {
  var flags = [];
  if (this.ignoringCase) {
    flags.push("i");
  }
  var regex = new RegExp(escapeRegexSpecialChars(occurrences), flags.join(""));
  return inputTarget.replace(regex, replacement);
};
