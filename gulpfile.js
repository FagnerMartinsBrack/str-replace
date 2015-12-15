var gulp = require( "gulp" );
var nodeunit = require( "gulp-nodeunit" );

gulp.task( "default", function() {
  // TODO
});

gulp.task( "test", function() {
  gulp.src( "test/**/*.js" )
    .pipe(nodeunit())
});
