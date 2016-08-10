var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('webserver', function() {
  connect.server();
});
 
gulp.task('default', ['webserver']);
/* we can add jshint, uglify, concatenation and image minification*/