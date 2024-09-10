const bookRepository = require('../repositories/bookRepository');

const createBook = async (bookData) => {
  return await bookRepository.createBook(bookData);
};

const getAllBooks = async () => {
  return await bookRepository.getAllBooks();
};


const updateBook = async (id, bookData) => {
  const book = await bookRepository.updateBook(id, bookData);
  if (!book) throw new Error('Không tìm thấy sách để cập nhật');
  return book;
};


const deleteBook = async (id) => {
  const book = await bookRepository.deleteBook(id);
  if (!book) throw new Error('Không xóa');
  return book;
};
module.exports = {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook
};
