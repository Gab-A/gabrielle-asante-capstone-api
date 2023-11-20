const knex = require("knex")(require("../knexfile"));

const getAllQuotes = async (_req, res) => {
  try {
    const data = await knex("quotes").select("id", "content", "author");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving quotes : ${err}`);
  }
};

module.exports = {
  getAllQuotes,
};
