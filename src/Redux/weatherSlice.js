import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weatherData',
        initialState: {
            data: null,
        },
        reducers: {
            setWeatherData(state, action) {
                state.data = action.payload
            }
        }
})

export const {setWeatherData} = weatherSlice.actions
export default weatherSlice.reducer