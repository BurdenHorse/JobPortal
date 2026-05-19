const Application = require("../models/Application");
const Job = require("../models/Job");


// apply to a job => jobseeker
exports.applyToJob = async (req, res) => {
    try {
        if (req.user.role !== "jobseeker") {
            return res.status(403).json({ message: "Be job seekers to apply" });
        }

        const existingJob = await Job.findById(req.params.jobId);

        if (!existingJob) {
            return res.status(404).json({ message: "Job is not found!"});
        }

        if (existingJob.isClosed)
            return res.status(400).json({message: "Job was closed, cannot apply!"})

        const existingApplication = await Application.findOne({
            job: req.params.jobId,
            applicant: req.user._id,
        });

        if (existingApplication) {
            return res.status(400).json({ message: "Already applied to this job!"});
        }

        const application = await Application.create({
            job: req.params.jobId,
            applicant: req.user._id,
            resume: req.user.resume, // assuming have resume
        });

        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

// get logged-in user's application => jobseeker
exports.getMyApplications = async (req, res) => {
    try {
        const apps = await Application.find({ applicant: req.user._id })
            .populate("job", "title company location type")
            .sort({ createdAt: -1});

        res.json(apps);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

// get all applicants for a job => employer
exports.getApplicantsForJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId);

        if (!job) {
            return res.status(404).json({ message: "Job is not found!"});
        }

        if (req.user.role !== "employer") {
            return res.status(403).json({ message: "Be employer to view applicants"})
        }

        if ( job.company.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized to view applicants"});
        }

        const applications = await Application.find({ job: req.params.jobId})
            .populate("job", "title location category type")
            .populate("applicant", "name email avatar resume");

        res.json(applications)

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

// get application by id => two 
exports.getApplicationById = async (req, res) => {
    try {
        const app = await Application.findById(req.params.id)
            .populate("job", "title")
            .populate("applicant", "name email avatar resume");
        if (!app) return res.status(404).json({ message: "Application not found.", id: req.params.id});

        const isOwner = 
            app.applicant._id.toString() === req.user._id.toString() ||
            app.job.company.toString() === req.user._id.toString();
        
        if (!isOwner) {
            return res.status(403).json({ message: "Not authorized to view this application" });
        }

        res.json(app);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

// update application status => employer
exports.updateStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const app = await Application.findById(req.params.id).populate("job");

        if (!app || app.job.company.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized to update this application"})
        }
        app.status = status;

        await app.save();
        res.json({ message: "Application status updated", status });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

