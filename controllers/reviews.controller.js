const Review = require("../moduls/Reeview.model");

module.exports.reviewController = {
  addReview: async (req, res) => {
    try {
      const addReview = await Review.find({ _reviewsId: req.params.id }).create(
        {
          name: req.body.name,
        }
      );
    } catch (err) {
      res.json(err.message);
    }
  },
  getReviews: async (req, res) => {
    const { name } = req.body;
    try {
      const reviews = await Book.find({
        name,
      });
      res.json(reviews);
    } catch (err) {
      res.json(err.message);
    }
  },
};
