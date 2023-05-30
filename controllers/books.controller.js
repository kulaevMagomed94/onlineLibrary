const Book = require("../moduls/Book.model");
const User = require("../moduls/User.model");

module.exports.booksController = {
  addBook: async (req, res) => {
    const { name, _genreId, _reviewsId } = req.body;
    try {
      const newBook = await Book.create({
        name,
        _genreId,
        _reviewsId,
      });
      res.json(newBook);
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteBook: async (req, res) => {
    try {
      const deleteBook = await Book.findByIdAndDelete(req.params.id);
      res.json(deleteBook);
    } catch (err) {
      res.json(err.message);
    }
  },
  changeBook: async (req, res) => {
    const { name, _genreId, _reviewsId } = req.body;
    try {
      const changeBook = await Book.findByIdAndUpdate(req.params.id, {
        name,
        _genreId,
        _reviewsId,
      });
    } catch (err) {
      res.json(err.message);
    }
  },
  rentBook: async (req, res) => {
    try {
      const { id } = req.params;
      const { _userId } = req.params;

      const book = await Book.findById(id);
      const user = await User.findById(_userId);

      if (book._userId) {
        return res.json("эта книга уже арендована другим пользователем");
      }
      if (user.isBlocked) {
        return res.json("вы заблокированы");
      }
      if (user.rentedBook.length >= 3) {
        return res.json(
          "нельзя арендовать больше 3-х книг одновременно",
          "эта книга уже арендована другим пользователем"
        );
      }
      await Book.findByIdAndUpdate(id, {
        _userId,
      });
      await User.findByIdAndUpdate(_userId, {
        $push: {
          rentedBook: id,
        },
      });
      res.json("rented");
    } catch (err) {
      res.json(err.message);
    }
  },
  selectBook: async (req, res) => {
    try {
      await Book.findByIdAndUpdate(req.params.id, {
        _userId: null,
      });
      await User.findByIdAndUpdate(req.params._userId, {
        $pull: {
          rentedBook: req.params.id,
        },
        isBlocked: true,
      });
      // await User.findByIdAndUpdate(req.body._userId, {
      //   isBlocked: true,
      // });
      res.json("Книга отобрана, пользователь заблокирован");
    } catch (err) {
      res.json(err.message);
    }
  },
  bookReturn: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params._userId, {
        $pull: {
          rentedBook: req.params.id,
        },
      });
      await Book.findByIdAndUpdate(req.params.id, {
        _userId: null,
      });
      res.json("Книга возврашена");
    } catch (err) {
      res.json(err.message);
    }
  },
  getBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.json(err.message);
    }
  },
  getBooksById: async (req, res) => {
    try {
      const bookById = await Book.findById(req.params.id);
      res.json(bookById);
    } catch (err) {
      res.json(err.message);
    }
  },
  getBooksByGenre: async (req, res) => {
    try {
      const getBooksByGenre = await Book.find({ _genreId: req.params.id });
      res.json(getBooksByGenre);
    } catch (err) {
      res.json(err.message);
    }
  },
};
