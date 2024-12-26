import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { setWeatherData } from "../Redux/weatherSlice";


const Weatherdetails = () => {
    const [city, setCity] = useState('')
    const [error, setError] = useState('');
    const dispatch = useDispatch()

    const APIkey = "5011c36b13efc7f9aca5ad9b1c276d76"

    const fetchingWeather = async (cit) => {        
        const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cit}&appid=${APIkey}`)
        const data = response.data
        if(data) {

            const newRow = {
                name: data.name,
                temperature: parseFloat((data.main.temp - 273.15).toFixed(2)),
                weather: data.weather[0].description,
              };

              dispatch(setWeatherData(newRow))
        }

        
    }

    const handleChange = (e) => {        
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        try{
            if (city.trim()) {
                fetchingWeather(city);
              }
        } catch(error) {
            console.error(error);
            
        }
    }

    
    return (
        <Box
          component="form" 
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: 500,
            display: 'flex',
            gap: 2,
            mb: 2,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search city"
            value={city}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
          <Button 
            type="submit"
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{
              borderRadius: 2,
              px: 4,
              whiteSpace: 'nowrap',
              backgroundColor: '#baf562',
              color: "#030a03"
            }}
          >
            Search
          </Button>
        </Box>
    )
}

export default Weatherdetails