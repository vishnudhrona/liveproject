import { h1 } from "framer-motion/client";
import { useSelector } from "react-redux"

const Weathersearch = () => {
    const weatherData = useSelector((state) => state.weatherData)
    
    return(
        <div>
            {weatherData&& (

<>
<h1>{weatherData?.data?.name}</h1>
<h1>{weatherData?.data?.weather}</h1>

</>
            )}
        </div>
    )
}

export default Weathersearch