import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserReducer";
import cartReducer from "./cartReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig ={
    key:'root',
    storage
}
const rootReducer = combineReducers({
    currentUser:currentUserReducer,
        cart:cartReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})
export const persistor = persistStore(store)
