var gulp = require( "gulp" );
var nodeunit = require( "gulp-nodeunit" );
var istanbul = require( "gulp-istanbul" );

gulp.task( "default", function() {
  // TODO
});

gulp.task( "test-instrument", function() {
  gulp.src( "src/**/*.js" )
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task( "test", [ "test-instrument" ], function() {
  gulp.src( "test/**/*.js" )
    .pipe(nodeunit())
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({
      thresholds: {
        global: 100
      }
    }));
});
