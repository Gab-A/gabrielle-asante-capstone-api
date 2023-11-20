const router = require("express").Router();
const quotesController = require("../controllers/quotes-controller");

router.get("/", quotesController.getAllQuotes);

module.exports = router;
