const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8001;

const usersRoutes = require("./routes/users-routes");

app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
