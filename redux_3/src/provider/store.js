import { configureStore} from "@reduxjs/toolkit";
import { TodoQuery } from "./queries/todoQuery";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer:{
        [TodoQuery.reducerPath]:TodoQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(TodoQuery.middleware),
})

setupListeners(store.dispatch)