import { useState } from "react";
import countriesData from "./countriesData";

const Dropdown = () => {

    const [selectedCountry, setSelectedCountry] = useState("India");


    return (
        <>
            <select onChange={(e) => setSelectedCountry(e.target.value)} name="firstDropdown">
                {countriesData.length && countriesData.map((currentCountry, index) => {
                    console.log(selectedCountry);

                    return <option key={index} value={currentCountry.name}>{currentCountry.name}</option>
                })}
            </select>
            <select name="secondDropdown">
                {countriesData.length > 0 && countriesData.find((country) => country.name === selectedCountry)?.cities.map((currElm) => {
                    return <option key={currElm}>{currElm}</option>
                })}
            </select>
        </>
    )
}

export default Dropdown;