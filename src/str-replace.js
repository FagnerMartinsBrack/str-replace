var replaceAll = function( occurrences ) {
  var configs = this;
  return {
    from: function( target ) {
      return {
        to: function( replacement ) {
          var template;
          var index = -1;
          if ( configs.ignoringCase ) {
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
        }
      };
    },
    ignoringCase: function() {
      return replaceAll.call({
        ignoringCase: true
      }, occurrences );
    }
  };
};

var replace = new function() {
  // TODO Replace the first occurrence
};

replace.all = replaceAll;

module.exports = replace;
