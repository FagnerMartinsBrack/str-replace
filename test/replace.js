var replace = require( "../src/str-replace" );

module.exports = {
  replace_first_occurrence: function( assert ) {
    var actual = replace( "a" )
      .from( "aa" )
      .with( "e" );
    var expected = "ea";
    assert.strictEqual( actual, expected );
    assert.done();
  },
  replace_first_occurrence_with_regex_special_chars: function( assert ) {
    var actual = replace( "$" )
      .from( "${template}" )
      .with( "#" );
    var expected = "#{template}";
    assert.strictEqual( actual, expected );
    assert.done();
  },
  replace_first_occurrence_ignoring_the_case: function( assert ) {
    var actual = replace( "a" )
      .ignoringCase()
      .from( "AA" )
      .with( "e" );
    var expected = "eA";
    assert.strictEqual( actual, expected );
    assert.done();
  }
};
