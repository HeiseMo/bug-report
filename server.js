require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session       = require('express-session');
const passport      = require('passport');
const cors = require('cors');
const async = require('async');
const crypto = require('crypto');
const https = require('https');
const fs = require('fs');
const flash = require('express-flash');
const config = require('config');
const db = config.get('mongoURI');

const PORT = process.env.PORT || 3030;

require('./config/passport');


mongoose
  .connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const app_name = "TrackMe"
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(favicon(path.join(__dirname, 'client', 'public', 'favicon.ico')));



// default value for title local
app.locals.title = 'TrackMe';
/*
app.use(session({
  secret:`TheYellowWetDog`,
  resave: true,
  saveUninitialized: true
}));*/

const MongoStore = require("connect-mongo");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGOURI
  })
  })
);

// USE passport.initialize() and passport.session() HERE:
app.use(passport.initialize());
app.use(passport.session());


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
 
app.use((req, res, next) => {
 //res.sendFile(__dirname + "/client/build/index.html"); //THIS IS CAUSING THE HEADER ISSUES NEED TO FIGURE THIS OUT! Im starting the server with node ./bin/www to get same errors7
  next();
});

const index = require('./Routes/index');
//app.use('/', index);
const authRoutes = require('./Routes/auth-routes');
const reportAndMessagesRoutes = require('./Routes/reportAndMessages');
app.use('/api', authRoutes);
app.use('/api/report-messages', reportAndMessagesRoutes);
app.use("/api/users", require("./Routes/user"));

app.listen(PORT,()=>{
  console.log('listening on ' + process.env.PORT || PORT)
})
module.exports = app;
/*

*/