const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("../routes/jobRoutes");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://job-killers.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Vue-Jobs API!, By Mazin Emad");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
});

// export for Vercel
module.exports = app;
