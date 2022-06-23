const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
//const models = require("./models/Flight");
const Flight = require('./routes/flightRoute');

const app = express();

app.use(json());

app.use('/flight', Flight);


const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
