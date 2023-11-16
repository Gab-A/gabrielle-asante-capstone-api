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

const createUser = async (req, res) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return res.status(400).json({
      message: "Please provide your first name, last name and email address.",
    });
  }
  newUser = {
    first_name: first_name,
    last_name: last_name,
    email: email,
  };

  try {
    const outcome = await knex("users").insert(newUser);
    const createdUser = await knex("users").where({ id: outcome[0] }).first();
    res.status(201).send(createdUser);
  } catch (error) {
    res.status(500).json({
      message: `Because of this ${error}, this user cannot created.`,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const outcome = await knex("users")
      .where({ id: req.params.id })
      .update(req.body);

    if (outcome === 0) {
      return res.status(404).send({
        message: `This user ID ${req.params.id} could not be found`,
      });
    }

    const updatedUser = await knex("users")
      .where({ id: req.params.id })
      .first();

    res.send(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: `Could not update user with ${req.params.id} because of:  ${error}.`,
    });
  }
};
module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
};
