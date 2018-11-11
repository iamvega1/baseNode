'use strict';

const mongoose = require('./model'),
    bcrypt = require('bcryptjs'),
	Schema = mongoose.Schema;

var MainSchema = new Schema({
		username : {
            type: String,
            required: true
        },
		password : {
            type: String,
            required: true
        },
        rol : {
        	type : String,
        	required : false
        }
	},
	{
		collection : 'user'
	});
MainSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

MainSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};
const Main = mongoose.model('User', MainSchema);

module.exports = Main;