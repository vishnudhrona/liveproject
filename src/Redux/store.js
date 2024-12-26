import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice"
import weatherSlice from "./weatherSlice"

const store = configureStore({
    reducer: {
        productDate: productSlice,
        weatherData: weatherSlice
    }
})

export default store