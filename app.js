//加载模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//加载路由文件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var myRoute = require('./routes/myRoute');
var author = require('./routes/author');
var newRoute = require('./routes/expressRoutes.js');

// 生产一个express的实例
var app = express();

// view engine setup
/*
设置 views 文件夹为存放视图文件的目录,
即存放模板文件的地方,__dirname 为全局变量,
存储当前正在执行的脚本所在的目录。
 */
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎为pug
app.set('view engine', 'pug');


//加载日志中间件
app.use(logger('dev'));
//加载解析json的中间件
app.use(express.json());
//加载解析url encoded请求体的中间件。  post请求
app.use(express.urlencoded({ extended: true }));
//加载解析cookie的中间件
app.use(cookieParser());
//设置public文件夹为放置静态文件的目录
app.use(express.static(path.join(__dirname, 'public')));

// 路由控制器。
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/myRoute', myRoute);
app.use('/author', author);
app.use('/abc', newRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//把app导出。  别的地方就可以通过 require("app") 获取到这个对象
module.exports = app;