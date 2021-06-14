import {createSlice} from '@reduxjs/toolkit';
import LoginWS from '../../handlers/LoginWS';
import InputControlHandler from '../../handlers/InputControlHandler'

const LoginSlice = createSlice({
    name:'login',
    initialState:{
        sessionStart:false,
        password:null,
        username:null
    },
    reducers:{
        controlUsername:(state, action)=> {
            const testUsername = InputControlHandler.username(action.payload);
            state = {...state, username:testUsername};
            console.log("STATE USERNAME SLICE");
            console.log(state.username);
        },
        controlPassword: (state, action)=> {
            const testPassword = InputControlHandler.password(action.payload);
            state = {...state, password:testPassword};
        }
    }
})

export const {controlUsername, controlPassword} = LoginSlice.actions;
export default LoginSlice.reducer;