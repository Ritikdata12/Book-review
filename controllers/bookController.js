const Book = require('../models/Book');
const Review = require('../models/Review');

// Create a book
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all books with optional filtering
exports.getBooks = async (req, res) => {
  try {
    const { authorName, bookName, page = 1, limit = 10 } = req.query;
    const filter = {};

    if (authorName) filter.authorName = new RegExp(authorName, 'i');
    if (bookName) filter.bookName = new RegExp(bookName, 'i');

    const books = await Book.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get book by ID with average rating and reviews
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const reviews = await Review.find({ book: req.params.id }).populate('user', 'username');
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);

    res.json({ book, avgRating, reviews });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search books by bookName or authorName
exports.searchBooks = async (req, res) => {
  try {
    const { q } = req.query;

    const books = await Book.find({
      $or: [
        { bookName: new RegExp(q, 'i') },
        { authorName: new RegExp(q, 'i') }
      ]
    });

    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
