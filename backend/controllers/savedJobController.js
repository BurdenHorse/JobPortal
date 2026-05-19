const SavedJob = require("../models/SavedJob");
const Job = require("../models/Job");

exports.saveJob = async (req, res) => {
  try {
    if (req.user.role !== "jobseeker")
      return res.status(403).json({ message: "only jobseeker can save job" });

    const existJob = await Job.findById(req.params.jobId);
    if (!existJob)
      return res.status(404).json({ message: "Job is not found to save!" });

    const exists = await SavedJob.findOne({
      job: req.params.jobId,
      jobseeker: req.user._id,
    });
    if (exists) return res.status(400).json({ message: "Job already saved" });

    const saved = await SavedJob.create({
      job: req.params.jobId,
      jobseeker: req.user._id,
    });
    res.status(201).json(saved);
  } catch (error) {
    return json
      .status(500)
      .json({ message: "Failed to save job", error: error.message });
  }
};

exports.unsaveJob = async (req, res) => {
  try {
    // const existJob = await Job.findById(req.params.jobId);
    // if (!existJob)
    //   return res.status(404).json({ message: "Job is not found to save!" });

    await SavedJob.findOneAndDelete({
      job: req.params.jobId,
      jobseeker: req.user._id,
    });
    res.json({ message: "Job removed from saved list" });
  } catch (error) {
    return json
      .status(500)
      .json({ message: "Failed to remove save job", error: error.message });
  }
};

exports.getMySavedJobs = async (req, res) => {
  try {
    const savedJobs = await SavedJob.find({ jobseeker: req.user._id }).populate(
      {
        path: "job",
        populate: {
          path: "company",
          select: "name companyName companyLogo",
        },
      },
    );
    res.json(savedJobs);
  } catch (error) {
    return json
      .status(500)
      .json({ message: "Failed to remove save job", error: error.message });
  }
};
