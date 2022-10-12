import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/add-to-cart/addToCartSlice';
import favoritesReducer from "../features/favorite/favoritesSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer
    }
})

