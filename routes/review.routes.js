const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/review", reviewController.addReview);
router.get("/review", reviewController.getReviews);

module.exports = router;
