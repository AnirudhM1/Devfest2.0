const express = require("express");
const router = express.Router();
const { authCheck } = require("../config/oauth");
const expenseController = require("../controllers/Expense");

router
  .route("/")
  .get(authCheck, expenseController.getExpenses)
  .post(authCheck, expenseController.createExpenses);

router.post("/:expenseId", authCheck, expenseController.updateExpense);

module.exports = router;
