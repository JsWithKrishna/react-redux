import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TodoQuery } from "./query/TodoQuery";
import { TodoSlice } from "./slices/TodoSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        [TodoSlice.name]:TodoSlice.reducer,
        [TodoQuery.reducerPath]:TodoQuery.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TodoQuery.middleware),
})

setupListeners(store.dispatch)