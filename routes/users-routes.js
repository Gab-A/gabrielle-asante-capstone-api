const router = require("express").Router();
const usersController = require("../controllers/users-controller");

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getSingleUser);

router.post("/", usersController.createUser);

router.patch("/:id", usersController.updateUser);

module.exports = router;
