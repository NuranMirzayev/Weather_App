import { useState } from 'react'
import '../components/Data.css'
import Data from './Data'
import { api_key, base_url } from './utils/constants'
import { TypesWeather } from './utils/types'


const Right = () => {

    const [infoWeather, setInfoWeather] = useState<TypesWeather>({})
    const [mes, setMes] = useState('Enter city name')
    // const [loading, setLoading] = useState<boolean>(false)

    const getWeather = async (city: string) => {
        // setLoading(true)
        try {
            let res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            let data = await res.json()
            setInfoWeather({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
                sunrise: data.sys.sunrise,
                speed: data.wind.speed,
                id: data.weather[0].id,
                icon: data.weather[0].icon,
                description: data.weather[0].description,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min,
                humidity: data.main.humidity,

            });
            // setLoading(false)
            setMes('')
        } catch (error) {
            setMes('There is no such Place!')
        }
    }
    return (
        <div className='rght_component'>
            <Data
                info={infoWeather}
                getWeather={getWeather}
                mes={mes}
            // loading={loading} 
            // setLoading={setLoading}
            />
        </div>
    )
}

export default Right