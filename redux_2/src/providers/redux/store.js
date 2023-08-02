import {configureStore} from '@reduxjs/toolkit';
import { counterSlice } from './counter/CounterSlice';


export const store = configureStore({
    
    reducer: {
        [counterSlice.name]:counterSlice.reducer
    },
})