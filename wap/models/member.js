var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
id: String,
password: String,
password2: String,
nickname: String,
sex: String
});

module.exports = mongoose.model('member', memberSchema);

