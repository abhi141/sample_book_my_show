const uuid = require('uuid').v4
const TicketBookingModel = require('../../models/TicketBooking')
const TicketAvailabilityModel = require('../../models/TicketAvailability')

class TicketBooking {


    async createTicketBooking(ticketBookingInfo, queryParams) {
        let availabilityCheck = await TicketAvailabilityModel.findOne({ticket_availability_id:ticketBookingInfo["ticket_availability_id"],tickets_availble:true})
        if (availabilityCheck) {
            ticketBookingInfo["tickets_booked"] = true
            return TicketBookingModel.create(ticketBookingInfo).then((ticketBookingCreatedResponse) => {
                return { status: true, data: ticketBookingCreatedResponse }
            })

        }
        else {
            ticketBookingInfo["tickets_booked"] = false
            return TicketBookingModel.create(ticketBookingInfo).then((ticketBookingCreatedResponse) => {
                return { status: true, message: "No Tickets Available" }
            })
           
        }



    }

}
// const TicketBookingObject = new TicketBooking()
module.exports = new TicketBooking()
// module.exports.createTicketBooking=TicketBookingObject.createTicketBooking
