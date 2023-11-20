const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));
const authenticate = require("./middleware");

// ## GET /my-profile
// -   Gets information about the currently logged in user.
// -   If no valid JWT is provided, this route will respond with 401 Unauthorized.
// -   Expected headers: { Authorization: "Bearer JWT_TOKEN_HERE" }
router.get("/", authenticate, async (req, res) => {
  // 🌟 Since we've used `authenticate`:
  // 🌟 - We already know the user has a valid token
  // 🌟 - The id of the user is available on req.user_id
  const profile = await knex("users").where({ id: req.user_id }).first();
  delete profile.password;
  res.send(profile);
});

module.exports = router;
