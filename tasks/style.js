//对less进行编译
'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
//当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
gulp.task('Less', function () {
    return gulp.src('./src/style/less/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0','> 5%'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('./src/style/css'));

});

gulp.task('concatLess', ['Less'],function () {
    return gulp.src('./src/style/css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watchless', function () {
    console.log("自动补全相关在http://www.ydcss.com/archives/94");
    return gulp.watch('./src/style/less/*.less', ['concatLess']);
});
