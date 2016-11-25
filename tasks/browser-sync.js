//实施多平台浏览

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
// 创建一个任务确保JS任务完成之前能够继续响应


// 使用默认任务启动Browsersync，监听JS文件
gulp.task('serve', function () {
    // 从这个项目的根目录启动服务器
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    // 添加 browserSync.reload 到任务队列里
    // 所有的浏览器重载后任务完成。
    gulp.watch("./dist/**",function(){
        browserSync.reload();
    });
});
