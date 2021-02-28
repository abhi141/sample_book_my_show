const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Movie = new Schema({
    movie_id:String,
    genre: String,
    movie_name: String,
    cast: String
});
const MyMovie = mongoose.model("Movie", Movie, "movie");

module.exports = MyMovie