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


