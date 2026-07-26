import React from "react";

function ListofPlayers() {
    const players = [
        { name: "Sachin", score: 95 },
        { name: "Virat", score: 88 },
        { name: "Dhoni", score: 67 },
        { name: "Rohit", score: 91 },
        { name: "Rahul", score: 62 },
        { name: "Gill", score: 73 },
        { name: "Pant", score: 58 },
        { name: "Hardik", score: 80 },
        { name: "Jadeja", score: 69 },
        { name: "Bumrah", score: 77 },
        { name: "Shami", score: 64 }
    ];

    const lowScorers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h2>Players with Score Below 70</h2>

            <ul>
                {lowScorers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;