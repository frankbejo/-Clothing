import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [

    ]
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addfavorites: (state, action) => {
            state.favorites.push(action.payload)
        }
    }
})

export const {addfavorites} = favoritesSlice.actions;

export default favoritesSlice.reducer;