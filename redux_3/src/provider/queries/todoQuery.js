import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const  TodoQuery = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3256/api/v1'
    }),
    endpoints:(builder)=>({
        getTodos: builder.query({
            query:()=>({
                url:"/todo"
            })
        }),
        addTodo:builder.mutation({
            query:(obj)=>({
                url:"/todo",
                method:"POST",
                body:obj
            })
        }),
        deleteTodo:builder.mutation({
            query:(id)=>({
                url:`/todo/${id}`,
                method:"delete"
            })
        }),
    })
})

export const {useGetTodosQuery,useAddTodoMutation,useDeleteTodoMutation} = TodoQuery;