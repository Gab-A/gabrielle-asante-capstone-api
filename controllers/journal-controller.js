const knex = require("knex")(require("../knexfile"));

// Get all journals:

const getAllJournals = async (_req, res) => {
  try {
    const response = await knex("journal")
      .join("users", "users.id", "journal.users_id")
      .select(
        "journal.id",
        "journal.users_id",
        "journal.content",
        "journal.title",
        "journal.mood",
        "journal.created_at",
        "journal.updated_at"
      );
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Error retrieving journals: ${error}`);
  }
};

// Get jounral from user by ID:

const getJournalById = async (req, res) => {
  try {
    const journal = await knex("journal")
      .join("users", "users.id", "journal.users_id")
      .select(
        "journal.id",
        "journal.users_id",
        "journal.content",
        "journal.title",
        "journal.mood",
        "journal.created_at",
        "journal.updated_at"
      )
      .where("journal.id", req.params.id)
      .first();

    res.json(journal);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve journal for user with ID ${req.params.id}: ${error}`,
    });
  }
};

// Create journal:
const createJournal = async (req, res) => {
  const { content, title, users_id, mood } = req.body;

  const newJournal = {
    // users_id: users_id,
    content: content,
    title: title,
    // mood: mood,
  };

  try {
    const result = await knex("journal").insert(newJournal);
    const createdJournal = await knex("journal")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdJournal);
    console.log(createJournal);
  } catch (error) {
    res.status(500).json({
      message: `Because of this ${error}, this journal cannot be created.`,
    });
  }
};

// Update journal:

const updateJournal = async (req, res) => {
  try {
    const outcome = await knex("journal")
      .where({ id: req.params.id })
      .update(req.body);

    if (outcome === 0) {
      return res.status(404).send({
        message: `Journal with ID ${req.params.id} not found`,
      });
    }
    const updatedJournal = await knex("journal")
      .where({ id: req.params.id })
      .first();
    return res.status(200).send(updatedJournal);
  } catch (error) {
    res.status(500).json({
      message: `Because of this ${error}, this journal entry cannot be updated.`,
    });
  }
};

// Delete journal:

const deleteJournal = async (req, res) => {
  try {
    const outcome = await knex("journal").where({ id: req.params.id }).del();

    if (outcome === 0) {
      return res
        .status(404)
        .json({ message: `Journal with ID ${req.params.id} not found` });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete journal with ID ${req.params.id}`,
    });
  }
};

module.exports = {
  getAllJournals,
  getJournalById,
  createJournal,
  updateJournal,
  deleteJournal,
};
