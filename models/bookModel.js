// models/bookModel.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Tiêu đề sách là bắt buộc'],
  },
  author: {
    type: String,
    required: [true, 'Tên tác giả là bắt buộc'],
  },
  description: {
    type: String,
  },
  publishedYear: {
    type: Number,
  },
  genre: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
