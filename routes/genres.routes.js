const { Router } = require("express");
const { genreController } = require("../controllers/genres.controller");

const router = Router();

router.get("/genres", genreController.getGanres);
router.post("/admin/genre", genreController.addGenre);
router.patch("/admin/genre/:id", genreController.changeGenre);
router.delete("/admin/genre/:id", genreController.deleteGanre);

module.exports = router;
