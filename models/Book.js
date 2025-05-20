const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  yearOfPublication: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  numberOfPages: { type: Number, required: true },
  condition: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('ComicData', bookSchema);
