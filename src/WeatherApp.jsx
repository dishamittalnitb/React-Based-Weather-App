import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./SearchBox.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({ //defining state 
        city: "Mumbai",
        description: "clear sky",
        feels_like: 31.31,
        humidity: 44,
        sea_level: 1009,
        temp: 30.84
    })

    const updateInfo = (newInfo) => { //new info yaha se re - render hogi
        setWeatherInfo(newInfo);
    }

    return ( //info prop ke andar weatherInfo pass kiya
        <div style={{ textAlign: "center" }}>
            <h1 className="Head">Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>)
};