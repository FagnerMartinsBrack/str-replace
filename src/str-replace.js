var replaceAll = function( oldToken ) {
  var configs = this;
  return {
    from: function( string ) {
      return {
        to: function( newToken ) {
          var template;
          var index = -1;
          if ( configs.ignoringCase ) {
            template = oldToken.toLowerCase();
            while((
              index = string
                .toLowerCase()
                .indexOf(
                  template,
                  index === -1 ? 0 : index + newToken.length
                )
              ) !== -1 ) {
              string = string
                .substring( 0, index ) +
                  newToken +
                string.substring( index + newToken.length );
            }
            return string;
          }
          return string.split( oldToken ).join( newToken );
        }
      };
    },
    ignoreCase: function() {
      return replaceAll.call({
        ignoringCase: true
      }, oldToken );
    }
  };
};

module.exports = {
  all: replaceAll
};
