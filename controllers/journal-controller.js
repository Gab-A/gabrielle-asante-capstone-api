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
    users_id: users_id,
    content: content,
    title: title,
    mood: mood,
  };

  const checkUserExistence = await knex("users").where("id", users_id).first();

  if (!checkUserExistence) {
    return res.status(404).json({ error: "User not found" });
  }

  try {
    const result = await knex("journal").insert(newJournal);
    const createdJournal = await knex("journal")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdJournal);
  } catch (error) {
    res.status(500).json({
      message: `Because of this ${error}, this note cannot be created.`,
    });
  }
};

// Update journal:

const updateJournal = async (req, res) => {
  // const checkExists = await knex("journal")
  //   .where({ id: req.params.id })
  //   .first();

  // if (!checkExists) {
  //   return res
  //     .status(404)
  //     .send({ message: `Journal with id ${req.params.id} could not be found` });
  // }

  // const requestedUser = req.body.users_id;
  // const checkUserExists = await knex("users")
  //   .where({ id: requestedUser })
  //   .first();
  // if (!checkUserExists) {
  //   return res
  //     .status(404)
  //     .send({ message: `User with id ${requestedUser} does not exist.` });
  // }
  try {
    const editJournal = await knex("journal")
      .where({ id: req.params.id })
      .first();
    return res.status(200).send(editJournal);
  } catch (error) {
    res.status(500).json({
      message: `Because of this ${error}, this journal entry cannot be updated.`,
    });
  }
};

// Delete journal:

const deleteJournal = async (req, res) => {
  try {
    // const journalItem = await knex("journal")
    //   .where({ id: req.params.id })
    //   .first();

    // // if (!journalItem) {
    // //   return res.status(404).send({
    // //     message: `Journal with ID ${req.params.id} not found`,
    // //   });
    // // }

    await knex("journal").where({ id: req.params.id }).del();

    res.status(204).send({
      message: `Journal with ID ${req.params.id} has been deleted successfully`,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
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
