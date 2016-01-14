var replace = require( "../src/str-replace" );

module.exports = {
  replace_all: function( assert ) {
    var actual = replace
      .all( "/" )
      .from( "/home/dir" )
      .with( "\\" );
    var expected = "\\home\\dir";
    assert.strictEqual( actual, expected );
    assert.done();
  },
  ignoring_case: function( assert ) {
    var actual = replace
      .all( "house" )
      .ignoringCase()
      .from( "Many Houses" )
      .with( "Horse" );
    var expected = "Many Horses";
    assert.strictEqual( actual, expected, "should replace ignoring the case" );

    actual = replace
      .all( "house" )
      .from( "Many Houses" )
      .with( "Horse" );
      expected = "Many Houses";
      assert.strictEqual( actual, expected, "should not replace if not ignoring the case" );

      assert.done();
  },
  ignoring_case_only_the_first_occurrence: function( assert ) {
    var actual = replace
      .all( "/dir" )
      .ignoringCase()
      .from( "/Dir\\dir" )
      .with( "\\dir" );
      var expected = "\\dir\\dir";
      assert.strictEqual( actual, expected );
      assert.done();
  },
  ignoring_case_only_the_last_occurrence: function( assert ) {
    var actual = replace
      .all( "\\dir" )
      .ignoringCase()
      .from( "/dir\\Dir" )
      .with( "/dir" );
      var expected = "/dir/dir";
      assert.strictEqual( actual, expected );
      assert.done();
  }
};
