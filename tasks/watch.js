//watch所有
var gulp = require("gulp");
gulp.task('begin', function() {
  // Watch .scss files
  gulp.run("watchless");
  // Watch .js files
  gulp.watch('./src/js/*.js', ['javascript']);
  // Watch image files
  gulp.watch('./src/imgs/*', ['images']);
  //watchHtml
  gulp.run("watchHtml");
  // Create LiveReload server
  gulp.run("serve");
});
