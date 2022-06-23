const {Flights} = require('../models/Flight');


exports.getFlight = async(req, res) => {
   try{
       const flight =  Flights;
    res.status(200).json({
        message: 'all flights',
        flight:{
            "1":{"title": "flight to canada",
            "time": "1pm",
           "price": 26000,
            "date": "26-06-2022"},
            "2": {
                "title": "flight to canada",
                "time": "2pm",
               "price": 26000,
                "date": "27-06-2022"
            }   
        }
    })

   }
   catch(err){
       res.status(500).json({ message: err})
   }
}
exports.createFlight = async(req,res)=> {
    try{
        const flight = await req.body;
        Flights.push(flight);

        res.status(201).json({
            message: "Flights booked",
            flight
        })

    }
    catch(err){
        res.status(500).json({ message: err})
    }
}




