const {Flights} = require('../models/Flight');
const {v4: uuid} = require('uuid');


exports.getFlight = async(req, res) => {
   try{
       const flight =  Flights;
    res.status(200).json({
        message: 'all flights',
        flight: flight
    })

   }
   catch(err){
       res.status(500).json({ message: err})
   }
}
exports.createFlight = async(req,res)=> {
    try{
        const {title, time, price, date} = await req.body;
       const newFlight ={
           id: uuid(),
           title,
           time: new Date().toLocaleTimeString(),
           price,
           date: new Date().toLocaleDateString()
       }

        Flights.push(newFlight);

        res.status(201).json({
            message: "Flights booked",
            newFlight
        })

    }
    catch(err){
        res.status(500).json({ message: err})
    }
}

exports.getFlights = async(req, res) => {
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id)
        res.status(200).json({
            message: "Flight found",
            flight
        })
    }
    catch(err) {

    }
}

exports.updateFlight = async (req,res) => {
    try{
        let id =req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: 'flight updated',
            flight
        });
    }
    catch(err){
        res.status(500).json({ message: err})
    }
}
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight)=> flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: 'flight deleted',
            flight,
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}



