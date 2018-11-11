'use strict';

const mm = require('../models/main-model');

class MainController {

    raiz(req, res, next) {

    	res.render('home');
    }
}

module.exports = new MainController();