const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name && !last_name && !email && !password) {
    return res.status(400).send("Please enter the required fields");
  }

  if (!first_name) {
    return res.status(400).send("First name is a required field");
  }

  if (!last_name) {
    return res.status(400).send("Last name is a required field");
  }

  if (!email) {
    return res.status(400).send("Email is a required field");
  }

  if (!password) {
    return res.status(400).send("Password is a required field");
  }

  const hashedPassword = bcrypt.hashSync(password);

  const newUser = {
    first_name,
    last_name,
    email,
    password: hashedPassword,
  };

  try {
    await knex("users").insert(newUser);
    res.status(201).send("Registered successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Failed registration");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(404).send("Please enter the required fields");
  }

  if (!email) {
    return res.status(400).send("Email is a required field");
  }

  if (!password) {
    return res.status(400).send("Password is a required field");
  }

  const user = await knex("users").where({ email: email }).first();
  if (!user) {
    return res.status(400).send("Invalid email");
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid password");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );

  res.send({ token });
});

module.exports = router;
