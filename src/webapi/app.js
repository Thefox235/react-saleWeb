var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require ('mongoose');
const cors = require ('cors');

require('./mongo/category.model');
require('./mongo/product.model');
require('./mongo/user.model');
require('./mongo/brand.model');
require('./mongo/order.model');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const {log}= require('')
var productRouter = require('./routes/product');
var categoryRouter = require('./routes/category');
var brandRouter = require('./routes/brand');
var orderRouter = require('./routes/order');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())//cho phép gọi tới api này 
// ket noi database mongodb
mongoose.connect('mongodb://localhost:27017/wd18320')
.then(()=>console.log('kết nối thành công '))
.catch((err)=>console.log('Thất bại',error))
// định nghĩ routing

app.use ('/',indexRouter);
app.use ('/users',usersRouter);
app.use ('/product',productRouter);
app.use ('/category',categoryRouter);
app.use ('/brand',brandRouter);
app.use ('/order',orderRouter);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/product',productRouter);

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

module.exports = app;
