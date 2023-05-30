const User = require("../moduls/User.model");

module.exports.userController = {
  addUser: async (req, res) => {
    try {
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        isBlocked: req.body.isBlocked,
        rentedBook: req.body.rentedBook,
      });
      res.json(newUser);
    } catch (err) {
      res.json(err.message);
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.json(err.message);
    }
  },
};
