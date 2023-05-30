const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const router = Router();

router.get("/books", booksController.getBooks);
router.get("/book/:id", booksController.getBooksById);
router.get("/books/genre/:id", booksController.getBooksByGenre);
router.post("/admin/book", booksController.addBook);
router.patch("/admin/book/:id", booksController.changeBook);
router.patch("/book/rented/:id/user/:_userId", booksController.rentBook);
router.patch("/book/return/:id/user/:_userId", booksController.bookReturn);
router.patch(
  "/admin/book/select/:id/user/:_userId",
  booksController.selectBook
);
router.delete("/admin/book/:id", booksController.deleteBook);

module.exports = router;
