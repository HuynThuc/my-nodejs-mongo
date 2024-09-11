// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

router.post('/', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBooksById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
