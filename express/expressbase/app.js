
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pruebaRouter = require('./routes/prueba');
var dinamicoRouter = require('./routes/dinamico');

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
app.use('/prueba', pruebaRouter);
app.use('/dinamico', dinamicoRouter);

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


/* ********************************************** */
//hecho por mi
/*
var express = require('express');
var app = express();

app.all('/', function(peticion, respuesta){
  respuesta.send("hola");
})

//mostrar informacion de usuario por get
app.get('/acerca', function(peticion, respuesta){
  respuesta.send("acerca");
});

//formulario recibir info
app.post('/acerca', function(peticion, respuesta){
  respuesta.send("acerca");
});

//delete
app.delete('/acerca', function(peticion, respuesta){
  respuesta.send("acerca");
});

//put actualiza
app.put('/acerca', function(peticion, respuesta){
  respuesta.send("acerca");
});

var server = app.listen(3000, function (param) {

  });
  */