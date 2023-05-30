const { Router } = require("express");
const { userController } = require("../controllers/users.controller");

const router = Router();

router.get("/users", userController.getUsers);
router.post("/admin/user", userController.addUser);

module.exports = router;
