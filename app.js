var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var periodoRouter = require('./routes/Periodo');
var carreraRouter = require('./routes/Carrera');
var versionRouter = require('./routes/Version');
var EstatusClaseRouter = require('./routes/EstatusClase');
var ProfesorRouter = require('./routes/Profesor');
var ClaseRouter = require('./routes/Clase');
var EstadoRouter = require('./routes/Estado');
var EstatusEstRouter = require('./routes/EstatusEst');
var TipoActividadRouter = require('./routes/TipoActividad');
var ActividadRouter = require('./routes/Actividad');
var CiudadRouter = require('./routes/Ciudad');
var DomicilioRouter = require('./routes/Domicilio');
var EstudianteRouter = require('./routes/Estudiante');
var EstudianteActividadRouter = require('./routes/EstudianteActividad');
var TipoUsuarioRouter = require('./routes/TipoUsuario');
var UsuarioRouter = require('./routes/Usuario');

//var carreraRouter = require()
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
app.use('/v1/periodo', periodoRouter);
app.use('/v1/carrera', carreraRouter);
app.use('/v1/version', versionRouter);
app.use('/v1/estatusclase', EstatusClaseRouter);
app.use('/v1/Profesor', ProfesorRouter);
app.use('/v1/Clase', ClaseRouter);
app.use('/v1/Estado', EstadoRouter);
app.use('/v1/EstatusEst', EstatusEstRouter);
app.use('/v1/TipoActividad', TipoActividadRouter);
app.use('/v1/Actividad', ActividadRouter);
app.use('/v1/Ciudad', CiudadRouter);
app.use('/v1/Domicilio',DomicilioRouter);
app.use('/v1/Estudiante',EstudianteRouter);
app.use('/v1/EstudianteActividad',EstudianteActividadRouter);
app.use('/v1/TipoUsuario',TipoUsuarioRouter);
app.use('/v1/Usuario',UsuarioRouter); 

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
