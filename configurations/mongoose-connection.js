const mongoose = require('mongoose');
const dbgr = require('debug')('development:mongoose');

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => dbgr('connected'))
  .catch((e) => dbgr('Error: ', e));
  
module.exports = mongoose.connection;

/*
  on terminal -> to start debugging 

  for MAC
    export DEBUG=development:*
    export DEBUG=

  for WINDOW
    set DEBUG=development:*
    set DEBUG=
*/
