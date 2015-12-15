module.exports = {
  all: function( oldToken ) {
    return {
      from: function( string ) {
        return {
          to: function( newToken ) {
            return string.split( oldToken ).join( newToken );
          }
        }
      }
    };
  }
};
