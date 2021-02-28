const mongoose = require('mongoose');
const debug = require('debug')("sample-book-my-show:server");

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
let dbConnection=mongoose.connection
dbConnection.on("open",()=>{
    debug("Connected to mongo DB")
})
