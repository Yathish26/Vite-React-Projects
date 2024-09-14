import React, { useState } from 'react'

export default function Radio() {
    const games = ['cricket', 'football', 'basketball']
    const week = ['weekend', 'weekday']

    const [plays,setPlays] = useState()
    const [times,setTime] = useState()
    return (
        <>
            <h1>Radio</h1>
            <p>Game to Play</p>
            {
                games.map((game,id) => {
                    return (
                        <>

                            <input type="radio" name={plays}  value={game} key={id} onChange={(e)=>setPlays(e.target.value)} />
                            <label>{game}</label>
                        </>
                    )
                })
            }
            <p>Day</p>
            {
                week.map((day,id) => {
                    return (
                        <>

                            <input key={id} name={times} value={day} onChange={(e)=>setTime(e.target.value)} type="radio" />
                            <label>{day}</label>
                        </>
                    )
                })
            }
            <h1>You need to Play {plays} game on {times} </h1>

        </>
    )
}
