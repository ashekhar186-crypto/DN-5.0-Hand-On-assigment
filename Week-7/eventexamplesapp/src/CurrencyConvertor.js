import { useState } from "react";

function CurrencyConvertor() {
    const [rupees, setRupees] = useState("");
    const [euro, setEuro] = useState("");

    const handleSubmit = () => {
        const rate = 90; // Example conversion rate
        setEuro((rupees / rate).toFixed(2));
    };

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Currency Convertor</h2>

            <input
                type="number"
                placeholder="Enter Rupees"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Convert
            </button>

            <h3>Euro: € {euro}</h3>
        </div>
    );
}

export default CurrencyConvertor;