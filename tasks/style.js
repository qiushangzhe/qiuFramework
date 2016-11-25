//对less进行编译
'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
//当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('Less', function () {
    return gulp.src('./src/style/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watchless', function () {
    return gulp.watch('./src/style/*.less', ['Less']);
});
