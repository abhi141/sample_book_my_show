const router = require('express').Router()
const UserService = require('../services/user/user')
const MovieService = require('../services/movie/movie')
const TicketAvailabilityService = require('../services/ticket-availability/ticket-availability')
const TicketBookingService = require('../services/ticket-booking/ticket-booking')
const Handler = require('../utils/request-handler')
const ApiAuth = require('../utils/api-auth')

router.post("/create_user",((req,res,next)=>{
    console.log("----------*******")
    Handler(UserService.createUser,req.body,req.query)(req,res,next)

}));

router.post("/create_movie",((req,res,next)=>{
    console.log("----------*******")
    Handler(MovieService.createMovie,req.body,req.query)(req,res,next)

}))


router.post("/create_ticket_availability",((req,res,next)=>{
    console.log("----------*******")
    Handler(TicketAvailabilityService.createTicketAvailability,req.body,req.query)(req,res,next)

}))

router.post("/login",((req,res,next)=>{
    console.log("----------*******")
    Handler(UserService.login,req.body,req.query)(req,res,next)

}))


router.post("/create_booking",ApiAuth(),((req,res,next)=>{
    console.log("----------*******")
    Handler(TicketBookingService.createTicketBooking,req.body,req.query)(req,res,next)

}))


router.get("/get_movies",((req,res,next)=>{
    console.log("----------*******")
    Handler(MovieService.getMovieList,req.query)(req,res,next)

}))

router.get("/get_ticket_availbility",((req,res,next)=>{
    console.log("----------*******")
    Handler(TicketAvailabilityService.getTicketAvailabilityList,req.query)(req,res,next)

}))
module.exports=router