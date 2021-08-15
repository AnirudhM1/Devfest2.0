const Task = require("../models/Task");
const User = require("../models/User");
const { info } = require("../util/Info");
// const Project = require('../models/Project')

module.exports.getAllTasks = async (req, res) => {
  const jwt = req.headers.jwt;
  const user = await info(jwt);
  console.log(user.id);
  const tasks = await Task.find({ user: user.id });
  res.send(tasks);
};

module.exports.createTask = async (req, res) => {
  const jwt = req.body.headers.jwt;
  console.log({ jwt });
  const user = await info(jwt);
  console.log({ user });
  const name = req.body.name;
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
  const savedTask = await task.save();
  res.status(201).send(savedTask);
};

module.exports.getTask = async (req, res) => {
  const jwt = req.headers.jwt;
  console.log(jwt);
  const user = await info(jwt);
  console.log({ user });
  const { taskId } = req.params;
  console.log({ taskId });
  const task = await Task.findById(taskId);
  console.log({ task });
  console.log(task.user);
  console.log(user.id);
  if (task.user != user.id) {
    const e = new Error("Not Authenticated");
    e.status = 401;
    throw e;
  }
  res.send(task);
};

module.exports.updateTask = async (req, res) => {
  const jwt = req.body.headers.jwt;
  const user = await info(jwt);
  const { taskId } = req.params;
  const { name, status, priority, description, deadline } = req.body;
  const task = await Task.findById(taskId);
  if (task.user != user.id) {
    const e = new Error("Not Authenticated");
    e.status = 401;
    throw e;
  }
  if (name) {
    task.name = name;
  }
  if (status) {
    task.status = status;
  }
  if (description) {
    task.description = description;
  }
  if (priority) {
    task.priority = priority;
  }
  if (deadline) {
    task.deadline = deadline;
  }
  await task.save();
  res.send(task);
};
