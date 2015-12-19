var replace = require( "../src/str-replace" );

module.exports = {
  replace_first_occurrence: function( assert ) {
    var actual = replace( "a" )
      .from( "aa" )
      .to( "e" );
    var expected = "ea";
    assert.strictEqual( actual, expected );
    assert.done();
  }
};
