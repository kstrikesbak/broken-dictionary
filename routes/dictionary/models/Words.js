const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  word: { type: String, unique: true, default: '', lowercase: true, trim: true},
  definition: { type: String, default: '', trim: true}
});

module.exports = mongoose.model('words', WordSchema);
