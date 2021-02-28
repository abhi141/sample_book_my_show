const uuid = require('uuid').v4
const TicketAvailabilityModel = require('../../models/TicketAvailability')
 
class  TicketAvailability{


    async createTicketAvailability(ticketAvailabilityInfo,queryParams){
        let dupCheck= await TicketAvailabilityModel.findOne(ticketAvailabilityInfo)
        if(dupCheck){
            return {status:true,message:"TicketAvailability Info Already Exists"}
        }
        else{
            ticketAvailabilityInfo["ticket_availability_id"]=uuid()
            return TicketAvailabilityModel.create(ticketAvailabilityInfo).then((ticketAvailabilityCreatedResponse)=>{
                return{status:true,data:ticketAvailabilityCreatedResponse}
            })
        }
       
    }

    async getTicketAvailabilityList(queryParams){
        let findQuery={}
        if(queryParams.movie_id){
            findQuery["movie_id"] =queryParams.movie_id

        }
        if(queryParams.city){
            findQuery["city"] =queryParams.city
        }
        return TicketAvailabilityModel.find(findQuery).then((movieCreatedResponse)=>{
            return{status:true,data:movieCreatedResponse}
        })
    }

}
// const TicketAvailabilityObject = new TicketAvailability()
module.exports=new TicketAvailability()
// module.exports.createTicketAvailability=TicketAvailabilityObject.createTicketAvailability
