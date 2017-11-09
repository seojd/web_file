var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({

password: String,
password2: String,
});

module.exports = mongoose.model('member', memberSchema);

