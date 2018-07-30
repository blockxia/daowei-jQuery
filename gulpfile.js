//引入模块
var gulp=require('gulp')
const concat = require('gulp-concat') //合并文件(js/css)
const uglify = require('gulp-uglify') // 压缩js文件
const rename = require('gulp-rename') // 文件重命名
const less = require('gulp-less')  // 编译less文件
const cleanCSS = require('gulp-clean-css') // 压缩css
const htmlmin = require('gulp-htmlmin') // 压缩html
const connect = require('gulp-connect') // 实时自动编译打包
const open = require('open') // 自动打开浏览器访问
// 自动引入需要的插件
var $ = require('gulp-load-plugins')()//引入的是函数，调用以后返回的是对象




//配置任务
// task 注册任务 gulp任务是异步的 去掉return就是同步的， 执行任务从半自动到全自动
//定义处理js的任务
gulp.task('js',function () {
  //任务的具体内容
  return gulp.src('src/js/*.js') // 操作的源文件
    .pipe(concat('built.js',{newLine: ';'})) // 合并到临时文件
    .pipe(gulp.dest('dist/js')) //生成到的目标文件夹
    .pipe(rename({suffix:'.min'})) // 重命名
    // .pipe(uglify()) // 压缩
    .pipe(gulp.dest('dist/js'))

})


// 定义处理压缩html的任务
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})



//定义处理stylus的任务
gulp.task('less',function () {
  return gulp.src('src/less/*.less') // 操作的源文件
    .pipe($.less())
    .pipe(gulp.dest('src/css')) // 将转换为less的文件输出到src下
    .pipe($.connect.reload())
})


// 定义处理css 的任务
gulp.task('css',function () {
  return gulp.src('src/css/*.css') // 操作的源文件
    .pipe(concat('built.css')) // 合并到临时文件
    .pipe(gulp.dest('dist/css')) // 生成到目标文件夹
    .pipe(rename({suffix:'.min'})) //
    .pipe(cleanCSS({compatibility:'ie8'})) //
    .pipe(gulp.dest('dist/css')) //
    .pipe(connect.reload())
})

// 定义处理img 的任务
gulp.task('img',function () {
  gulp.src(['src/images/*.jpg','src/images/*.png'])
    .pipe(gulp.dest('dist/images'))//输出到css目录
})

//应用任务
// 用来定义默认的任务
gulp.task('default',['js','css','html','img','less'])


//定义监视的任务
gulp.task('watch',function () {
  //监视指定的文件，并制定对应的处理任务
  gulp.watch('src/js/*.js',['js'])
  gulp.watch('src/*.html',['html'])
  gulp.watch(['src/images/*.png','src/images/*.jpg'],['img'])
  gulp.watch(['src/css/*.css','src/less/*.less'],['css','less'])
  gulp.watch('src/less/*.less',['less'])

})
//注册一个全自动的任务
// 定义live-reload的任务
gulp.task('livereload', ['default'], function () {
  //配置服务器选项
  $.connect.server({
    root : 'dist/',//监视的源目标文件路径
    livereload : true,//是否实时刷新
    port : 4000//开启端口号
  })
  open('http://localhost:4000/')

  //确认监视的目标并且绑定相应的任务
  gulp.watch(['src/images/*.png','src/images/*.jpg'],['img'])
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch('src/*.html',['html'])
  gulp.watch(['src/css/*.css', 'src/less/*.less'], ['css','less'])
})