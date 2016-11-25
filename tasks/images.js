//压缩图片
var gulp = require("gulp"),
imagemin = require('gulp-imagemin'),
cache = require('gulp-cache'),
notify = require('gulp-notify');

// Images
gulp.task('images', function() {
  return gulp.src('images/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('images'))
    .pipe(notify({ message: 'Images task complete' }));
});
