const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const PhotoSchema = new mongoose.Schema({
   photo: String
});

module.exports = mongoose.model('Photo', PhotoSchema);