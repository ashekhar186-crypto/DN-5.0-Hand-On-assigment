function GuestPage() {
    return (
        <div>
            <h2>Guest Page</h2>

            <h3>Flight Details</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Fare</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Kolkata</td>
                        <td>Delhi</td>
                        <td>₹6500</td>
                    </tr>

                    <tr>
                        <td>AI202</td>
                        <td>Bengaluru</td>
                        <td>Mumbai</td>
                        <td>₹7200</td>
                    </tr>
                </tbody>
            </table>

            <p>Please login to book tickets.</p>
        </div>
    );
}

export default GuestPage;