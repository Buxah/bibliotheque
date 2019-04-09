var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require ('mysql');
var cors = require ('cors');
var bodyParser = require ('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientsRouter = require('./routes/clients');
var clientAddRouter = require('./routes/client-add');
var clientEditRouter = require('./routes/client-edit');
var livresRouter = require('./routes/livres');
var livreAddRouter = require('./routes/livre-add');
var livreEditRouter = require('./routes/livre-edit');
var exemplaireAdd = require('./routes/exemplaireAdd');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientsRouter);
app.use('/clientAdd', clientAddRouter);
app.use('/clientEdit', clientEditRouter);
app.use('/livres', livresRouter);
app.use('/livreAdd', livreAddRouter);
app.use('/livreEdit', livreEditRouter);
app.use('/exemplaireAdd', exemplaireAdd);

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bibliotheque'
});

connection.connect(function(error) {
  console.log(error);
});



app.set('connection', connection);

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
