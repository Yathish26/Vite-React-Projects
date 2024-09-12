import React, { useState } from 'react'

export default function Deletelist() {
    const games = ['Cricket', 'Football', 'Tennis', 'Badminton'];
    const [play, setPlay] = useState(games);
    const [checkedStates, setCheckedStates] = useState(new Array(games.length).fill(false));

    const handleDelete = (id) => {
        let updatedlist = play.filter((_, index) => index !== id);
        setPlay(updatedlist);

        // Update checkedStates when deleting an item
        let updatedCheckedStates = checkedStates.filter((_, index) => index !== id);
        setCheckedStates(updatedCheckedStates);
    };

    const handleCheck = (id) => {
        const updatedCheckedStates = [...checkedStates];
        updatedCheckedStates[id] = !updatedCheckedStates[id]; // Toggle the checkbox state
        setCheckedStates(updatedCheckedStates);
    };

    return (
        <>
            <h1>Delete List</h1>
            <ul style={{ listStyle: 'none' }}>
                {play.map((game, id) => (
                    <div key={id} style={{ display: 'flex' }}>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheck(id)} 
                            checked={checkedStates[id]} 
                        />
                        <li style={{ marginLeft: '10px' }}>
                            {game} 
                            {checkedStates[id] && (
                                <button 
                                    onClick={() => handleDelete(id)} 
                                    style={{ marginLeft: '10px' }}
                                >
                                    Delete
                                </button>
                            )}
                        </li>
                    </div>
                ))}
            </ul>
        </>
    );
}
