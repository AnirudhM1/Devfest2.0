const express = require("express");
const router = express.Router();
const taskController = require("../controllers/Task");
const { authCheck } = require("../config/oauth");
const catchAsync = require("../util/CatchAsync");

router
  .route("/")
  .get(authCheck, taskController.getAllTasks)
  .post(authCheck, taskController.createTask);

router
  .route("/:taskId")
  .get(authCheck, taskController.getTask)
  .post(authCheck, taskController.updateTask);

module.exports = router;
