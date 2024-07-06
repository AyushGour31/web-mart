const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(`${process.env.MONGODB_URL}/webmart`)
  .then(() => dbgr("connected"))
  .catch((e) => dbgr("Error: ", e));
  
module.exports = mongoose.connection;