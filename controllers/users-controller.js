const knex = require("knex")(require("../knexfile"));

const getAllUsers = async (_req, res) => {
  try {
    const response = await knex("users").select(
      "id",
      "first_name",
      "last_name"
    );
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send(`Error retrieving users: ${err}`);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await knex("users").where({ id: req.params.id }).first();

    if (!user) {
      return res.status(404).send({
        message: `User ID : ${req.params.id}, cannot be found`,
      });
    }
    res.json(user);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ message: `Could not user data for ${req.params.id}` });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
};
