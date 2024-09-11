
const Book = require('../models/bookModel');

const createBook = async (bookData) => {
  const book = new Book(bookData);

  try {
    const savedBook = await book.save();
    return savedBook;
  } catch (error) {
    throw new Error('Lỗi khi tạo sách: ' + error.message);
  }
};


const getAllBooks = async () => {

  try {
    const savedBook = await Book.find();
    return savedBook;
  } catch (error) {
    throw new Error('Lỗi khi tạo sách: ' + error.message);
  }
};


const updateBook = async (id, bookData) => {
  return await Book.findByIdAndUpdate(id, bookData, { new: true, runValidators: true });
};

const deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};

const getBooksById = async (id) => {
  return await Book.findById(id);
};



module.exports = {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getBooksById
};
