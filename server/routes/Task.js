const express = require("express");
const router = express.Router();
const taskController = require("../controllers/Task");
const { authCheck } = require("../config/oauth");
const catchAsync = require("../util/CatchAsync");

router.get("/", authCheck, catchAsync(taskController.getAllTasks));
router.post("/", authCheck, catchAsync(taskController.createTask, 400));

router
  .route("/:taskId")
  .get(authCheck, catchAsync(taskController.getTask))
  .post(authCheck, catchAsync(taskController.updateTask));

module.exports = router;
