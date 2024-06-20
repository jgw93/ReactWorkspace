import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FetchAxios(props) {
    const [temp, setTemp] = useState(true);
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [isReady, setReady] = useState(false);

    const url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=d9070ac6d07fab60c68b0192691cb753"
    const url1 = "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=68619ddc6b1c43ecb9bdae5cdd5e314a"

    useEffect(() => {
        axios.get(url1)
            .then(response => {
                console.log(response.data);
                // setTemp(response.data.main.temp);
                // setDesc(response.data.weather[0].main);
                // setIcon(response.data.weather[0].icon);
                // setReady(true);
            })
            .catch(err => console.error(err));
    })

    return (
        <div>
            {isReady &&
                <div>
                    {/* <p>Temperature: {temp} ºC</p>
                    <p>Description: {desc}</p>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" /> */}
                </div>}
        </div>
    )
};
export default FetchAxios;