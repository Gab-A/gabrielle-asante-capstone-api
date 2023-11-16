const router = require("express").Router();
const usersController = require("../controllers/users-controller");

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getSingleUser);

module.exports = router;
