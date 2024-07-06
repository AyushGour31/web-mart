const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

require('dotenv').config();
require('./configurations/mongoose-connection');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');
const developersRouter = require('./routes/developersRouter');

const app = express();
const PORT = process.env.PORT ;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(
//   expressSession({
//       resave: false,
//       saveUninitialized: false,
//       secret: false,
//   })
// );

// routes
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/developer', developersRouter);

app.listen(PORT);
