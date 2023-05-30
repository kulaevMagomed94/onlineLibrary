const Genre = require("../moduls/Genre.model");

module.exports.genreController = {
  getGanres: async (req, res) => {
    const { name } = req.body;
    try {
      const genres = await Genre.find({
        name,
      });
      res.json(genres);
    } catch (err) {
      res.json(err.message);
    }
  },
  addGenre: async (req, res) => {
    const { name } = req.body;
    try {
      const newBook = await Genre.create({
        name,
      });
      res.json(newBook);
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteGanre: async (req, res) => {
    try {
      const deleteGenre = await Genre.findByIdAndDelete(req.params.id);
      res.json(deleteGenre);
    } catch (err) {
      res.json(err.message);
    }
  },
  changeGenre: async (req, res) => {
    const { name } = req.body;
    try {
      const changeBook = await Genre.findByIdAndUpdate(req.params.id, {
        name,
      });
    } catch (err) {
      res.json(err.message);
    }
  },
};
