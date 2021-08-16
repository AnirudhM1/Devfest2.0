const Expense = require("../models/Expense");
const { info } = require("../util/Info");

module.exports.getExpenses = async (req, res, next) => {
  try {
    const jwt = req.headers.jwt;
    const user = await info(jwt);
    const expenses = await Expense.find({ user: user.id });
    res.send(expenses);
  } catch (e) {
    e.status = 500;
    next(e);
  }
};

module.exports.createExpenses = async (req, res, next) => {
  try {
    const jwt = req.body.headers.jwt;
    const user = await info(jwt);
    const { date, method, recipient, description, amount } = req.body;
    const expense = new Expense({
      user: user.id,
      date,
      method,
      recipient,
      description,
      amount,
    });
    const savedExpense = expense.save();
    res.send(expense);
  } catch (e) {
    e.status = 400;
    next(e);
  }
};

module.exports.updateExpense = async (req, res, next) => {
  try {
    const jwt = req.body.headers.jwt;
    const user = await info(jwt);
    res.send("Not Created Route");
  } catch (e) {
    e.status = 401;
    next(e);
  }
};
