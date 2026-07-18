import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState(""); //city is value of city which is empty in beginning and setCity is the new value which user inputs
    let [error, setError] = useState(false); //for error handling

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "dddcdc7cd0c3d1c43d267dbed99c539a";

    const getWeatherInfo = async () => {
        try {//because api will be called then the function works 
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);   //calling the api and is done by the help of documentation
            let JSONResponse = await response.json(); //fetch do not have data in readable format so json converts it to js object 
            console.log(JSONResponse);
            let result = { //choosing selected data
                city: city,
                temp: JSONResponse.main.temp,
                humidity: JSONResponse.main.humidity,
                feels_like: JSONResponse.main.feels_like,
                sea_level: JSONResponse.main.sea_level,
                description: JSONResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch (err) {
            setError(true); // error ke liye bhi same cheez
        }
    }
    const handleChange = (evt) => { //this handle changes and evt is event and evt.tar is the new value given to setCity
        setCity(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo(); //very important where to call the function for better working of code
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Location"
                    variant="outlined" required
                    value={city}
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "rgba(45, 45, 45, 0.8)", // Light background for visibility
                        borderRadius: "5px",
                        input: { color: "white" }, // Ensure text inside is visible
                        "& label": { color: "white" }, // Make the label visible
                        "& label.Mui-focused": { color: "white" }, // Change label color when focused
                    }}
                />
                <br></br><br></br>
                <Button
                    variant="contained"
                    type="submit" >
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such Place found in our APIs</p>}
            </form>
        </div>
    );
};