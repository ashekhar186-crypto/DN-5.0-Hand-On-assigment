import office from "./office.jpg";

function App() {

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "TCS",
      Rent: 75000,
      Address: "Bengaluru"
    },
    {
      Name: "Infosys",
      Rent: 45000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div style={{ marginLeft: "40px" }}>

      <h1>Office Space, at Affordable Range</h1>

      {offices.map((officeItem, index) => (

        <div key={index} style={{ marginBottom: "30px" }}>

          <img
            src={office}
            alt="Office Space"
            width="300"
          />

          <h2>Name: {officeItem.Name}</h2>

          <h3
            style={{
              color: officeItem.Rent < 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {officeItem.Rent}
          </h3>

          <h3>
            Address: {officeItem.Address}
          </h3>

        </div>

      ))}

    </div>
  );
}

export default App;