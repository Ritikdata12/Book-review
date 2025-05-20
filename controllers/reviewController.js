const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  const existing = await Review.findOne({ user: req.user._id, book: req.params.id });
  if (existing) return res.status(400).json({ message: "You already reviewed this book" });

  const review = await Review.create({
    user: req.user._id,
    book: req.params.id,
    rating: req.body.rating,
    comment: req.body.comment
  });

  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  review.rating = req.body.rating || review.rating;
  review.comment = req.body.comment || review.comment;
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
    const review = await Review.findById(req.params.id);
  
    if (!review || review.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }
  
    await Review.deleteOne({ _id: review._id });
    res.json({ message: "Review deleted" });
  };
  