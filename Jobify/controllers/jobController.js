import "express-async-errors";
import Job from "../models/JobModels.js";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const job = await Job.create();
  res.status(200).json({ job });
};

export const getJob = async (req, res) => {
  // get id from request params
  const { id } = req.params;

  const job = await Job.findById(id);
  if (!job) {
    return res.status(400).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
  // Without 'new', it would send the old job before the update. We don't want that so we use the new attribute

  if (!updatedJob) {
    return res.status(400).json({ msg: `no job with id ${id}` });
  }

  res.status(200).json({ msg: "job modified", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  if (!removedJob) {
    return res.status(400).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ msg: "job deleted", job: removedJob });
};
