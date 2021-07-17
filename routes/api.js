const { Router } = require("express");

const {
  getTransactions,
  createTransaction,
  createTransactionBulk,
} = require("../controllers/api");

const router = Router();

router.get("/transaction", getTransactions);

router.post("/transaction", createTransaction);

router.post("/transaction/bulk", createTransactionBulk);

module.exports = router;
