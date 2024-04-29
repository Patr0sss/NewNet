const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const userPostRoutes = require("./routes/userPostRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { requireAuth } = require("./middleware/authMiddleware");

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

// database connection
mongoose
  .connect()
  .then((result) => {
    app.listen(3000);
    console.log("Succesfully Connected !");
  })
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.send("NewNet API"));
app.use("/", authRoutes);
app.use("/", requireAuth, userPostRoutes);
