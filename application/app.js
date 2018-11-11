'use strict';

const express = require('express'),
    pug = require('pug'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    restFul = require('express-method-override')('_method'),
    main = require('./routers/main-router'),
    error = require('./controllers/error-controller'),
    favicon = require('serve-favicon')(`${__dirname}/dist/img/base.png`),
    publicDir = express.static(`${__dirname}/dist`),
    viewDir = `${__dirname}/views`,
    optSession = { secret:'secret', saveUninitialized: true, resave: true },
    port = (process.env.PORT || 3000);


let app = express();

app
    .set( 'views', viewDir )
    .set( 'view engine', 'pug' )
    .set( 'port', port )

    .use( session(optSession) )
    .use( bodyParser.json() )
    .use( bodyParser.urlencoded({ extended: false }) )
    .use( restFul )
    .use( publicDir )
    .use( favicon )
    .use( main )
    .use( error.http404 );

module.exports = app;