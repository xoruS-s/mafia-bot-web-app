import React from 'react';
import './SelectPlayers.css';

const SelectPlayers = () => {
    const count_players = [];
    for (let i = 5; i < 15; i++) {
        count_players.push(i)
    }

    return (
        <div className={'form'}>
            <h1>Жители города</h1>
            <select>
                {count_players.map((count_player) => (
                    <div>
                        <option value={count_player}>{count_player}</option>
                    </div>
                ))}
            </select>
        </div>
    );
};

export default SelectPlayers;