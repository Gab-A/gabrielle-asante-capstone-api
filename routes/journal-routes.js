const router = require("express").Router();
const journalController = require("../controllers/journal-controller");

// get all journals:

router.get("/", journalController.getAllJournals);

router.get("/:id", journalController.getJournalById);

router.post("/", journalController.createJournal);

router.patch("/:id", journalController.updateJournal);

router.delete("/:id", journalController.deleteJournal);

module.exports = router;
