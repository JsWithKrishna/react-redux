import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,action)=>{
            // state.value+=1
            state.value = state.value+1
        },
        decrement:(state,action)=>{
            state.value = state.value-1
        },
        incrementByValue:(state,action)=>{
            state.value = state.value+action.payload
        }
    }
})

export const {increment,decrement,incrementByValue} = counterSlice.actions