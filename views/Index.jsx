const React = require("react");

function Index({ flights }) {
  console.log(flights);
  return (
    <div>
      <nav>
        <a href="/createflight">ADD FLIGHT</a>
      </nav>
      <h1>All Flights</h1>
      {flights.map((flight, i) => {
        return (
          <div key={flight._id}>
            <h2>{flight.airline}</h2>
            <p>Flight Number: {flight.flightNo}</p>
            <p>Departing Date: {flight.departs?.toString().slice(0, 16)}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

module.exports = Index;
