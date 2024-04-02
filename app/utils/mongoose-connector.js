const mongoose = require('mongoose');
const debug = require('debug')("sample-book-my-show:server");
// RBGYLrD4ThrKqAzB
mongoose.connect('mongodb+srv://pos:RBGYLrD4ThrKqAzB@cluster0.3axot8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
let dbConnection=mongoose.connection
dbConnection.on("open",()=>{
    debug("Connected to mongo DB")
})
