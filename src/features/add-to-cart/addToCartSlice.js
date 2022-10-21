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
        removeItem: (state, action) => {
            const index = action.payload;
            state.cart.splice(index, 1)
        },
        setItems: (state, action) => {
            return {
                cart: action.payload
            }
        }
    }
})

export const {addItem, setItems, removeItem} = cartSlice.actions;

export default cartSlice.reducer;