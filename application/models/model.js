'use strict';

const mongoose = require('mongoose');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
  .catch( (reason) => {console.log('Manejador de la promesa fue rechazada por ('+reason+') aquí.')});

module.exports = mongoose;