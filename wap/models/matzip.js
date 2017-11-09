var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matzipSchema = new Schema({
mzname: String,
mztime: String,
mzmenu: String,
mzaddr: String,
mztel: String
});

module.exports = mongoose.model('matzip', matzipSchema);
