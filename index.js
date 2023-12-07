const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8001;

const usersRoutes = require("./routes/users-routes");
const journalController = require("./routes/journal-routes");
const quotesController = require("./routes/quotes-routes");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/journal", journalController);
app.use("/quotes", quotesController);

app.use("/auth", authRoutes);
app.use("/my-profile", profileRoutes);

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
