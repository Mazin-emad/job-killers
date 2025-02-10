const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  type: {
    type: String,
    required: [true, "Type is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  salary: {
    type: String,
    required: [true, "Salary is required"],
  },
  company: {
    name: {
      type: String,
      required: [true, "Company name is required"],
    },
    description: {
      type: String,
      required: [true, "Company description is required"],
    },
    contactEmail: {
      type: String,
      required: [true, "Contact email is required"],
      match: [/.+\@.+\..+/, "Please provide a valid email address"],
    },
    contactPhone: {
      type: Number,
      required: [true, "Contact phone is required"],
    },
  },
});

module.exports = mongoose.model("Job", jobSchema);
