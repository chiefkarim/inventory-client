import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserReducer";
export default configureStore({
    reducer: {
        currentUser:currentUserReducer
    },
})