'use strict';

const mc = require('../controllers/main-controller'),
    express = require('express'),
    router = express.Router();

router
    .get('/', mc.raiz);

module.exports = router;