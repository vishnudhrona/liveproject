import { useSelector } from "react-redux"

const Weathersearch = () => {
    const weatherData = useSelector((state) => state.weatherData)


    return (
        <div>
            {weatherData && (

                <>
                    <h1>city: {weatherData?.data?.name}</h1>
                    <h1>Temperature: {weatherData?.data?.temperature}</h1>
                    <h1>Cloude: {weatherData?.data?.weather}</h1>

                </>
            )}
        </div>
    )
}

export default Weathersearch