const express = require('express');
const router = express.Router();
const { createBook, getBooks, getBookById, searchBooks } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createBook);
router.get('/', getBooks);
router.get('/search', searchBooks);
router.get('/:id', getBookById);

module.exports = router;
