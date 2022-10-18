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
        },
        setItems: (state, action) => {
            return {
                cart: action.payload
            }
        }
    }
})

export const {addItem, setItems} = cartSlice.actions;

export default cartSlice.reducer;