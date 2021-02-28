const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    account_id:String,
    first_name: String,
    last_name: String,
    email: String,
    password : String,
    token:String
});
const MyUser = mongoose.model("User", User, "user");

module.exports = MyUser