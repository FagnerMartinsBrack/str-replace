var replace = require( "../src/str-replace" );

module.exports = {
  replace_all: function( assert ) {
    var actual = replace
      .all( "/" )
        .from( "/home/dir" )
      .to( "\\" );
    var expected = "\\home\\dir";
    assert.strictEqual( actual, expected );
    assert.done();
  },
  replace_all_ignoring_case: function( assert ) {
    var actual = replace
      .all( "house" )
        .ignoreCase()
        .from( "Many Houses" )
      .to( "Horse" );
    var expected = "Many Horses";
    assert.strictEqual( actual, expected );
    assert.done();
  },
  replace_all_ignoring_case_only_the_first_occurrence: function( assert ) {
    var actual = replace
      .all( "/dir" )
        .ignoreCase()
        .from( "/Dir\\dir" )
      .to( "\\dir" );
      var expected = "\\dir\\dir";
      assert.strictEqual( actual, expected );
      assert.done();
  }
};
