const Transaction = require("../models/transaction");

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({}).sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

const createTransaction = async ({ body }, res) => {
  try {
    const transaction = await Transaction.create(body);
    res.json(transaction);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

const createTransactionBulk = async ({ body }, res) => {
  try {
    const transaction = await Transaction.insertMany(body);
    res.json(dbTransaction);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = {
  getTransactions,
  createTransaction,
  createTransactionBulk,
};
