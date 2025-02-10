const Job = require("../modules/jobs.module.js");

// Create a job
const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a job
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a job
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a job
const getOneJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
  getOneJob,
};
