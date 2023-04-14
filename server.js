require("dotenv").config();
const express = require("express");

//Connecting our files (mongodb and flight schema) to our server.js running through mongoose
const connectToDb = require("./config/database");
const Flight = require("./models/Flight");

const app = express();

//View engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//Middleware
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.send(
    '<h1>Flights</h1> <a href="/createflight">Click here to create a new flight</a>'
  );
});

app.get("/createflight", (req, res) => {
  res.render("New");
});

app.get("/flights", (req, res) => {
  Flight.find({}, (error, allFlights) => {
    res.render("Index", { flights: allFlights });
    //res.render method is called to render the Index view template, passing allFlights as a variable names flights to the view. 
    //the {flights: allFlights} is passing down the prop named flights to the "Index" view template with value of allFlight Variable. Within Index view template, flight variable will be available that contains the array of flight objects retrieved from the database 
  });
});

app.post("/flights", (req, res) => {
  console.log(req.body);
  Flight.create(req.body, (error, createdFlight) => {
    res.redirect("/flights");
  });
});

//Listening port
app.listen(3000, () => {
  console.log("server is up");
  connectToDb();
});


