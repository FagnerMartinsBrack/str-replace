var replaceAll = function( oldToken ) {
  var configs = this;
  return {
    from: function( string ) {
      return {
        to: function( newToken ) {
          var _token;
          var index = -1;
          if ( configs.ignoringCase ) {
              _token = oldToken.toLowerCase();
              while((
                  index = string
                    .toLowerCase()
                    .indexOf(
                      _token,
                      index >= 0 ?
                        index + newToken.length : 0
                      )
                    ) !== -1
              ) {

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
