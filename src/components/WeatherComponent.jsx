import React, { useEffect, useState } from "react";
import {WEATHER_API_KEY} from './../local.env.js';
import  {WEATHER_API_URL} from './../local.env.js';



const WeatherComponent = () => {

    const [lat,setLat] = useState('')
    const [long,setLong] = useState('')
    const [info, setInfo] = useState({})


    useEffect(() => {
       navigator.geolocation.getCurrentPosition((position) => {
           setLat(position.coords.latitude)
           setLong(position.coords.longitude)
       } )
 
    

    const fetchWeather = async() => {

        // Con esta línea obtendremos la posición y sos coordenadas (lat y long) del usuario
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })

        // Verificación de que obtiene nuestras coordenadas
        // Recuerda permitir/activar el rastreo de posicionamiento en el navegador
        // console.log('posición del usuario')
        // console.table(lat, long)

        // Planteamos la URL
        let url =
            `${WEATHER_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${WEATHER_API_KEY}`

        await fetch(url).then(res => res.json()).then((resultado) => {
            console.log('RESULTADO: ', resultado)
            setInfo(resultado)
        })
    }
    fetchWeather()

}, [lat, long])

    return (
        <div>
                 <h1> Ciudad: {info.name}</h1>
                 <h2> {info.main.temp} ºC</h2>
        </div>
    )
}

export default WeatherComponent