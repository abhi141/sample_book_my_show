const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Movie = new Schema({
    movie_id:String,
    ticket_availability_id:String,
    tickets_availble : Boolean,
    city:String,
    time:String,
    language:String
});
const MyTicketAvailability = mongoose.model("TicketAvailability", Movie, "ticket_availability");

module.exports = MyTicketAvailability