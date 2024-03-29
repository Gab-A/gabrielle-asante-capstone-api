const knex = require("knex")(require("../knexfile"));

const getAllJournals = async (req, res) => {
  try {
    const response = await knex("journal")
      .select(
        "journal.id",
        "journal.users_id",
        "journal.content",
        "journal.title",
        "journal.mood",
        "journal.created_at",
        "journal.updated_at"
      )
      .where("journal.users_id", req.user_id);
    res.status(200).json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Error retrieving journals: ${error}`);
  }
};

const getAllMoods = async (req, res) => {
  try {
    const response = await knex("journal")
      .select("journal.id", "journal.mood", "journal.created_at")
      .where("journal.users_id", req.user_id);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Error retrieving moods: ${error}`);
  }
};

const getJournalById = async (req, res) => {
  console.log("hello");
  try {
    const journal = await knex("journal")
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

const createJournal = async (req, res) => {
  const user_id = req.user_id;
  const { content, title, mood } = req.body;

  console.log("Before", req.user_id);

  if (!title && !content) {
    res.status(400).send("Please enter a title and content for your journal");
  } else if (typeof title !== "string" || title === "") {
    return res.status(400).send("Please include a valid title to your journal");
  } else if (typeof content !== "string" || content === "") {
    return res
      .status(400)
      .send("Please include a valid content to your journal");
  } else {
    console.log("This is User Id:", req.user_id);
    const newJournal = {
      content,
      title,
      mood,
      users_id: user_id,
    };

    try {
      const result = await knex("journal").insert(newJournal);
      const createdJournal = await knex("journal")
        .where({ id: result[0] })
        .first();
      res.status(201).send(createdJournal);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: `Because of this ${error}, this journal cannot be created.`,
      });
    }
  }
};

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
  getAllMoods,
};
