import { configureStore } from "@reduxjs/toolkit";
import { featuredReducer } from "./slice";

export const store = configureStore({
    reducer: {
        featured: featuredReducer,
    },
})