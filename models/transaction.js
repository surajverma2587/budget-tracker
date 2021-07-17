const { Schema, model } = require("mongoose");

const schema = {
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction",
  },
  value: {
    type: Number,
    required: "Enter an amount",
  },
  date: {
    type: Date,
    default: Date.now,
  },
};

const transactionSchema = new Schema(schema);

const Transaction = model("Transaction", transactionSchema);

module.exports = Transaction;
