const Project = require("../models/Project");
const Task = require("../models/Task");
const { info } = require("../util/Info");

module.exports.getAllProjects = async (req, res) => {
  console.log("Request recieved");
  const jwt = req.headers.jwt;
  const user = await info(jwt);
  const projects = await Project.find({ user: user.id });
  res.send(projects);
};

module.exports.createProject = async (req, res) => {
  const jwt = req.body.headers.jwt;
  const user = await info(jwt);
  console.log({ user });
  const { name, client, description, deadline, budget } = req.body;
  console.log({ body: req.body });
  console.log({ name, client, description, deadline, budget });
  const status = req.body.status || 0;
  const tasks = [];
  const currentSpending = req.body.currentSpending || 0;
  const paymentStatus = req.body.paymentStatus || false;
  const payment = req.body.payment || null;
  const project = new Project({
    user: user.id,
    name,
    status,
    client,
    description,
    deadline,
    budget,
    tasks,
    currentSpending,
    paymentStatus,
    payment,
  });
  const savedProject = await project.save();
  res.send(savedProject);
};

module.exports.getProject = async (req, res) => {
  const jwt = req.headers.jwt;
  const user = await info(jwt);
  const { projectId } = req.params;
  const project = await Project.findById(projectId);
  console.log(project.user);
  console.log(user.id);
  if (project.user != user.id) {
    const e = new Error("Not Authenticated");
    e.status = 401;
    throw e;
  }
  res.send(project);
};

module.exports.updateProject = async (req, res) => {
  const jwt = req.body.headers.jwt;
  const user = await info(jwt);
  const { projectId } = req.params;
  const checkProject = await Project.findById(projectId);
  if (checkProject.user != user.id) {
    const e = new Error("Not Authenticated");
    e.status = 401;
    throw e;
  }
  const {
    name,
    status,
    client,
    description,
    deadline,
    budget,
    tasks,
    currentSpending,
    paymentStatus,
    payment,
  } = req.body;
  const project = await Project.findById(projectId);
  if (name && name != null) {
    project.name = name;
  }
  if (status && status != null) {
    project.status = status;
  }
  if (description && description != null) {
    project.description = description;
  }
  if (client && client != null) {
    project.client = client;
  }
  if (deadline && deadline != null) {
    project.deadline = deadline;
  }
  if (budget && budget != null) {
    project.budget = budget;
  }
  if (tasks && tasks != null) {
    project.tasks = tasks;
  }
  if (currentSpending && currentSpending != null) {
    project.currentSpending = currentSpending;
  }
  if (paymentStatus && paymentStatus != null) {
    project.paymentStatus = paymentStatus;
  }
  if (payment && payment != null) {
    project.payment = payment;
  }
  await project.save();
  res.send(project);
};

module.exports.getAllTasks = async (req, res) => {
  console.log("All tasks request recieved");
  const jwt = req.headers.jwt;
  const user = await info(jwt);
  const { projectId } = req.params;
  const project = await Project.findById(projectId).populate("tasks");
  if (project.user != user.id) {
    const e = new Error("Not Authenticated");
    e.status = 401;
    throw e;
  }
  const tasks = project.tasks;
  res.send(tasks);
};

module.exports.createTask = async (req, res) => {
  console.log("Request recieved");
  const jwt = req.body.headers.jwt;
  const user = await info(jwt);
  const { projectId } = req.params;
  const project = await Project.findById(projectId);
  if (project.user != user.id) {
    const e = new Error("Not Authenticated");
    e.status = 401;
    throw e;
  }
  const name = req.body.name;
  console.log({ name });
  const status = req.body.status || 0;
  const description = req.body.description || null;
  const priority = req.body.priority || "unrated";
  const deadline = req.body.deadline || null;
  const task = new Task({
    user: user.id,
    name,
    status,
    description,
    priority,
    deadline,
  });
  console.log({ task });
  project.tasks.push(task);
  const savedTask = await task.save();
  await project.save();
  console.log(savedTask);
  res.send(task);
};
