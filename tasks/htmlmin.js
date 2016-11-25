//压缩html
var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src('./src/**/*.html')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watchHtml', function () {
    gulp.run(['htmlmin']);
    gulp.watch('./src/**/*.html',['htmlmin']);
});
