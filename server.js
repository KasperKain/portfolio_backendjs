const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
dotenv.config();

const gamesRoutes = require("./routes/games");
const pagesRoutes = require("./routes/pages");
const artRoutes = require("./routes/art");
const toysRoutes = require("./routes/toys");
const user = require("./routes/user");
const app = express();

// Middleware
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  const jwtSecret = process.env.JWT_SECRET;

  if (!token) return res.status(403).send("Token is required");
  if (!jwtSecret)
    return res.status(500).send("Server Error: JWT_SECRET not set.");

  try {
    jwt.verify(token, jwtSecret);
    next();
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};
module.exports.verifyToken = verifyToken;

app.use(express.json({ limit: "5mb" }));
app.use(cors());
app.get("/", (req, res) => res.send("base"));
app.use("/games", gamesRoutes);
app.use("/pages", pagesRoutes);
app.use("/art", artRoutes);
app.use("/toys", toysRoutes);
app.use("/login", user);

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, {
    connectTimeoutMS: 5000,
    socketTimeoutMS: 5000,
  })
  .then(() => console.log(`Connected to Mongo!`))
  .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
