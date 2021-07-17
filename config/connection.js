const mongoose = require("mongoose");

const DB_NAME = "budget";

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const MONGOOSE_URI =
  process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

mongoose.connect(MONGOOSE_URI, MONGOOSE_OPTIONS);

module.exports = mongoose.connection;
