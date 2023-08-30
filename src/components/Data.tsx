import SearchIcon from '@mui/icons-material/Search';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import Divider from '@mui/material/Divider';
import { KeyboardEvent, ChangeEvent, useState } from 'react';
import '../components/Data.css';
import { TypesWeather } from './utils/types';

interface Props {
    info: TypesWeather,
    mes: string,
    loading: boolean,
    setLoading: (loading: boolean) => void
    getWeather: (city: string) => void
}

const Data = ({ info, getWeather, mes, loading, setLoading }: Props) => {
    const [city, setCity] = useState('');
    const [img, setImg] = useState(false)

    const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setLoading(!loading)
            getWeather(city);
            setCity('');
            setImg(true)
        }
    }

    const handleClickGetWeather = () => {
            setLoading(!loading)
            getWeather(city);
            setCity('');
            setImg(true)
    }

    const date = new Date();
    const formattedDate = date.toLocaleDateString()

    return (
        <div className='main_box'>
            <div className='box_right_inputs'>
                <input className='box_right_inputs_search' 
                onKeyUp={handleEnter} 
                onChange={handleChangeCity} type='text' value={city} />
                <button className='box_right_inputs_search_buttons' onClick={handleClickGetWeather} ><SearchIcon /></button>

            </div>
            <div className='main_box_information  '>
                <div className='box_left'>
                    {/* {loading ?
                    <div className="loader"></div> : */}
                    {/* <> */}
                    {!mes ?
                        <>
                            <img className='animate__animated animate__zoomIn' src={`https://openweathermap.org/img/wn/${info.icon}@4x.png`} alt={`${info.icon}`} />
                            <div className='box_left_div'>
                                <h1 className='qradus animate__animated animate__zoomIn'>{info.temp?.toFixed(0)}
                                    <p className='symbol'>℃</p>
                                </h1>
                                <h2 className='animate__animated animate__zoomIn animate__delay-1s'>{info.description}</h2>
                                <h2 className='animate__animated animate__zoomIn animate__delay-2s'>{info.country}, {info.city}</h2>
                                <h2 className='animate__animated animate__zoomIn animate__delay-3s'>{formattedDate}</h2>
                            </div>
                        </>
                        :
                        img
                    }
                    {/* </> */}
                    {/* } */}
                </div>
                <div className='box_right'>
                    {/* <div className='box_right_inputs'>
                    <input className='box_right_inputs_search' onChange={handleChangeCity} type='text' value={city} />
                    <button className='box_right_inputs_search_buttons' onClick={handleClickGetWeather} ><SearchIcon /></button>
                </div> */}
                    {/* {loading ?
                    <div className="loader"></div>
                    :
                    <> */}
                    {!mes &&
                        < div className='box_right_data '>
                            <div className='box_right_data_top animate__animated animate__zoomIn animate__delay-1s'>
                                <p className='box_right_data_p' > <VerticalAlignTopIcon className='box_right_data_p_icon' /> {info.temp_max?.toFixed(0)} ℃ </p>
                                <Divider orientation="vertical" flexItem > Max & Min</Divider>
                                <p ><VerticalAlignBottomIcon className='box_right_data_p_icon' /> {info.temp_min?.toFixed(0)} ℃</p>
                            </div>
                            <div className='box_right_data_med animate__animated animate__zoomIn animate__delay-2s'>
                                <p><img className='box_right_data_imgIcon' src="https://icons-for-free.com/iconfiles/png/512/sun+sunrise+weather+icon-1320196637098579511.png" alt="sunrise" /> {(new Date(info.sunrise! * 1000)).toLocaleTimeString()}</p>
                                <p><img className='box_right_data_imgIcon' src="https://icons-for-free.com/iconfiles/png/512/sun+sunset+weather+icon-1320196636209475292.png" alt="sunrise" /> {(new Date(info.sunset! * 1000)).toLocaleTimeString()}</p>
                            </div>
                            <div className='box_right_data_med animate__animated animate__zoomIn animate__delay-3s'>
                                <p >
                                    <img className='box_right_data_imgIconURL' src="https://icons-for-free.com/iconfiles/png/512/pressure+reading+icon-1320168707483980478.png" alt="pressure" /> {info.pressure} Pa
                                </p>
                                <p >
                                    <img className='box_right_data_imgIconURL' src="https://png2.cleanpng.com/sh/54975bdb4c4899d6d78f9f7b0a2e366b/L0KzQYm3VcI3N5doR91yc4Pzfri0iQVucZVujOs2Y3BwgMb7hgIucZR0huU2cILoc7r3igRifJp0hp8AYkC8Q7TthvE4OZdoSpC5N0e1RoqAV8E2Omg4S6Q5OUW5SIW9TwBvbz==/kisspng-humidity-computer-icons-precipitation-5b093cffa71fc2.0772697715273320956846.png" alt="pressure" /> {info.humidity}
                                </p>
                                <p >
                                    <img className='box_right_data_imgIconURL' src="https://png2.cleanpng.com/sh/9a4995952fead305b28229ab24c5943c/L0KzQYm3VMA1N5R1iZH0aYP2gLBuTgdqdpUyiAJuZXSwh7bolPhmel5rhARuY3H2hLr1h71kdJp1RdN7dD36ebBrTcVia2UASKUENUK4QbOATsIyOWQ3SKQ9MUW1Qom6UcQyP2Q4T6Q3cH7q/kisspng-wind-speed-weather-forecasting-clip-art-wind-5ac490395251b7.2113202415228314173372.png" alt="windSpeed" /> {info.speed} KM/H
                                </p>
                            </div>
                        </div>
                    }
                    <h2 className='messange'>{mes}</h2>
                    {/* </>
                } */}
                </div>
            </div>
        </div >
    )
}

export default Data