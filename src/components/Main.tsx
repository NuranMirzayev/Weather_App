
import '../components/Main.css'
import Right from './Right'

// interface Props {
//     getWeather: (city: string) => void,
//     info: TypesWeather
// }
// { getWeather, info }: Props

const Main = () => {
    return (
        <div className='container_main'> 
            <div className='mainBG'>
                <div className='right_container'><Right/></div>
            </div>
        </div>

    )
}

export default Main