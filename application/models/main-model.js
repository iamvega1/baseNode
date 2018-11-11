'use strict';
const conn = require('./main-schema');

class UserModel {

	getAll(cb) {
        conn.find({}, (err, docs) => {
            if (err) throw err;
            cb(docs);
        });
    }
}

module.exports = UserModel;