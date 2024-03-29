import { useEffect, useState } from "react";

const games: string[] = ['Cricket', 'Basketball', 'Chess', 'Badminton', 'Volleyball'];
const days: string[] = ['Weekday', 'Weekend'];

const DynamicRadios = () => {

    const [selectedGame, setSelectedGame] = useState<string>('');   //State variable to store the selected game
    const [selectedDay, setSelectedDay] = useState<string>('');     //State variable to store the day game
    const [display, setDisplay] = useState<boolean>(false);         //State variable to manipulate the output's display property

    useEffect(() => {
        selectedGame && selectedDay ? setDisplay(true) : setDisplay(false);
    }, [selectedDay, selectedGame]);                                //useEffect is dependent on selectedDay and selectedGame state variables

    return (
        <>
            <h2>Available games :</h2>
            {games.map((currGame, index) => {
                return (
                    <div key={index}>
                        <input onChange={(e) => setSelectedGame(e.target.value)} id={`${currGame}-${index}`} type="radio" name="selectedGame" value={currGame} />
                        <label htmlFor={`${currGame}-${index}`}>{currGame}</label>
                    </div>
                )
            })}
            <h2>Available timings :</h2>
            {days.map((currDay, index) => {
                return (
                    <div key={index}>
                        <input onChange={(e) => setSelectedDay(e.target.value)} type="radio" id={`${currDay}-${index}`} name="selectedDay" value={currDay} />
                        <label htmlFor={`${currDay}-${index}`}>{currDay}</label>
                    </div>
                )
            })}
            <h3 style={{ display: display ? 'block' : 'none' }}>You will play {selectedGame} on {selectedDay}</h3>
        </>
    )
}

export default DynamicRadios;