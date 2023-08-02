import React,{useState,useEffect} from 'react'
import Card from '../Components/Card';
import { toast } from 'react-hot-toast';
import Loader from '../Components/Loader'
import { useDeleteTodoMutation, useGetTodosQuery } from '../provider/queries/todoQuery';
import { useLocation } from 'react-router-dom';
const Todos = () => {
  const location = useLocation();
    const image = ["a","b","c"];
    const [todos,setTodos] = useState([]);
    const {data,isLoading,refetch} = useGetTodosQuery();
    const [deleteTodo,responseofDelete] = useDeleteTodoMutation();

    const handleOnClick = async(id)=>{
      try {
        const {error} =await deleteTodo(id)
        if(error){
          return toast.error(error.data?.message)
        }
            toast.success("todo delete");
      } catch (error) {
          toast.error(error.message)
      }
  }
    useEffect(()=>{
      if(data){
        setTodos(data?.todos)
      }
    },[data])

        useEffect(()=>{
          (async()=>{
            try {
                const {data,error} = await  refetch();
                if(data){
                  setTodos(data?.todos)
                }
              } catch (error) {
                
              }
              })()
        },[location,handleOnClick])

    // console.log({data})
    
 
if(isLoading || responseofDelete?.isLoading){
    return <Loader/>
  }
  return (
    <>
           <section className="text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All Todos</h1>
    
    </div>
    <div className="flex flex-wrap -m-2">
     
   
   {todos.length>0 && todos?.map((c,i)=>{
    return <Card 
    title={c.title}
    description={c.description}
    img={c.title} key={i} id={c._id} handleOnClick={handleOnClick} />
   })}

    </div>
  </div>
</section>

    </>
  )
}

export default Todos