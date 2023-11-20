const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }

  const authToken = req.headers.authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(authToken, process.env.JWT_KEY);

    // 🌟 Add the user data to the req object so it can be used in endpoints
    req.user_id = decodedToken.id;

    // 🌟 Continue to the endpoint
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send("Invalid auth token");
  }
};

module.exports = authenticate;
