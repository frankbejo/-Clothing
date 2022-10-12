import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [

    ]
}

export const cartSlice = createSlice({
    name: "addtocart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload)
        }
    }
})

export const {addItem} = cartSlice.actions;

export default cartSlice.reducer;