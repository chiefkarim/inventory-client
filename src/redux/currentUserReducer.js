import { createSlice } from '@reduxjs/toolkit'

export const currentUserSlice= createSlice({
    name:'currentUser',
    initialState:{
        username:null
    },
    reducers:{
        UserLoggedIn:(state,action)=>{
            state.username=action.payload
        },
        UserLoggedOut:(state)=>{state.username = null}
    }
})
export const {UserLoggedIn,UserLoggedOut} = currentUserSlice.actions
export default currentUserSlice.reducer