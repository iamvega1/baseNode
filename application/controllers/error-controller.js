'use strict';

class Errors {
	http401(req, res, next)	{
		let err = new Error();
		err.status = 401;
		err.statusText = 'You are not authorized to access this page.';

		res.render('error/error', {error: err, rol: req.session.rol});
	}

	http404(req, res, next)	{
		let err = new Error();
		err.status = 404;
		err.statusText = 'NOT FOUND';
		err.src ="img/perro.jpeg";
		err.message ="I´m sorry";
		res.render('error/error', {error: err, rol: req.session.rol});
	}

	http500(req, res, next)	{
		let err = new Error();
		err.status = 500;
		err.statusText = 'INTERNAL SERVER ERROR';

		res.render('error/error', {error: err, rol: req.session.rol});
	}
}

module.exports = new Errors();