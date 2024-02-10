const router = require("express").Router();
const journalController = require("../controllers/journal-controller");
const authenticate = require("./middleware/authenticate");

router.get("/", authenticate, journalController.getAllJournals);

router.get("/mood", authenticate, journalController.getAllMoods);

router.get("/:id", authenticate, journalController.getJournalById);

router.post("/", authenticate, journalController.createJournal);

router.patch("/:id", authenticate, journalController.updateJournal);

router.delete("/:id", authenticate, journalController.deleteJournal);

module.exports = router;
