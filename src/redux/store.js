import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserReducer";
import cartReducer from "./cartReducer";

export default configureStore({
    reducer: {
        currentUser:currentUserReducer,
        cart:cartReducer
    },
})