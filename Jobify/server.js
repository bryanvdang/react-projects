import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

app.use(express.json());
// GET ALL JOBS
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

// CREATE A JOB
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  //check for the body
  if (!company || !position) {
    return res
      .status(400)
      .json({ msg: "please provide a company and position" });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ job });
});

// GET A SINGLE JOB
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(400).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
});

import morgan from "morgan";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server is running on PORT ${port}...`);
});
