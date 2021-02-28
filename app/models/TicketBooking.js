const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TicketBooking = new Schema({
    account_id:String,
    movie_id:String,
    tickets_booked : Boolean,
    city:String,
    time:String,
    no_of_tickets:Number,
    ticket_availability_id : String
});
const MyTicketBooking = mongoose.model("TicketBooking", TicketBooking, "ticket_booking");

module.exports = MyTicketBooking