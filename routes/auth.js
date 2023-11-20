const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ## POST /auth/register
// - Creates a new user.
// - Expected body: { first_name, last_name, phone, address, email, password }
router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(400).send("Please enter the required fields");
  }

  const hashedPassword = bcrypt.hashSync(password);

  // Create the new user
  const newUser = {
    first_name,
    last_name,
    email,
    password: hashedPassword,
  };

  // Insert it into our database
  try {
    await knex("users").insert(newUser);
    res.status(201).send("Registered successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Failed registration");
  }
});

// ## POST /auth/login
// -   Generates and responds a JWT for the user to use for future authorization.
// -   Expected body: { email, password }
// -   Response format: { token: "JWT_TOKEN_HERE" }
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).send("Please enter the required fields");
  }

  // Find the user
  // TODO: test if this is case insenstive
  const user = await knex("users").where({ email: email }).first();
  if (!user) {
    return res.status(400).send("Invalid email");
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  // Check the password
  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid password");
  }

  // Generate a token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );

  res.send({ token });
});

module.exports = router;
