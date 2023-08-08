import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: "todo",
    initialState:{
        todo:[]
    },
    reducers:{
        setTodos:(state,action)=>{
            state.todo = action.payload
        }
    }
})

export const {setTodos} = TodoSlice.actions; 