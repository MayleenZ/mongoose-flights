const React = require("react");

function New() {
  return (
    <div>
      <nav>
        <a href="/flights">ALL FLIGHTS</a>
      </nav>
      <h1>Plan your next trip!</h1>
      <form action="/flights" method="POST" id="flight-form">
        Airline:
        <input
          type="text"
          name="airline"
          placeholder="American, United or Southwest"
        />
        <br />
        Flight Number:
        <input type="number" name="flightNo" />
        <br />
        Departure Date:
        <input type="date" name="departs" min="2024-01-01" />
        <br />
        <input type="submit" name="" value="Submit" />
      </form>
    </div>
  );
}

module.exports = New;
