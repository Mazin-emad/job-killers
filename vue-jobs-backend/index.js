require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes.js");

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

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected!"));

app.get("/", (req, res) => {
  res.send("Welcome to the Vue-Jobs API!, By Mazin Emad");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
