var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artistaRouter = require('./routes/artista-route');
var categoria = require('./routes/categoria-route');
var proveedor = require('./routes/proveedor-route');
var producto = require('./routes/producto-route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artista', artistaRouter);
app.use('/categoria', categoria);
app.use('/producto', producto);
app.use('/proveedor', proveedor);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.status(err.status || 500);
    res.render('error');
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, console.log('Server iniciar en http://localhost:' + PORT));

module.exports = app;
