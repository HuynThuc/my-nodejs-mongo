const bookService = require('../services/bookServices');

exports.createBook = async (req, res) => {
  try {
    const bookData = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      publishedYear: req.body.publishedYear,
      genre: req.body.genre
    };
    const book = await bookService.createBook(bookData);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: 'Lỗi khi tạo sách', error: error.message });
  }
};


exports.getAllBooks = async (req, res) => {
  try {
    const book = await bookService.getAllBooks();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: 'Lỗi khi lấy book', error: error.message });
  }
};


exports.updateBook = async (req, res) => {
  try {
    const book = await bookService.updateBook(req.params.id, req.body);
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: 'Lỗi khi cập nhật sách', error: error.message });
  }
};


exports.deleteBook = async (req, res) => {
  try {
    const book = await bookService.deleteBook(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: 'Lỗi khi xóa sách', error: error.message });
  }
};
