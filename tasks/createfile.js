var gulp = require("gulp");
var fs = require('fs');
function createFile(){
    //1.创建编译后目录
    fs.mkdirSync("dist");
    fs.mkdirSync("dist/css");
    fs.mkdirSync("dist/imgs");
    fs.mkdirSync("dist/js");
    fs.mkdirSync("dist/views");
    //2.创建开发目录
    fs.mkdirSync("src");
    fs.mkdirSync("src/imgs");
    fs.mkdirSync("src/js");
    fs.mkdirSync("src/style");
    fs.mkdirSync("src/views");
    fs.writeFile("src/index.html","这个index.html");

    fs.mkdirSync("mock");
}

gulp.task("createfile",createFile);
