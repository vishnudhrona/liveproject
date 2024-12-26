import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        setProduct(state, action) {
            state.push(action.payload);
        },

        deleteProduct(state, action)  {
            return state.filter((_, index) => index !== action.payload)
          },
    }
})

export const { setProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer