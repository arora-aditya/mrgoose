const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

let app = express();
let api = module.exports = express.Router();

const memberController = require('./controllers/members');
const teamController = require('./controllers/teams');

api.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json(err);
});

const { kick, fetchMembers } = require('./slack');

api.delete('/kick', (req, res, next) => {
  kick(req.body.id).then(() => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ OK: true });
  }).catch(err => {
    next(err);
  });
});

api.get('/members', (req, res, next) => {
  fetchMembers().then(members => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ members });
  }).catch(err => {
    throw err;
  });
});

module.exports = app;
