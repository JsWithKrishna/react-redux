import React from 'react'
import Loader from '../Components/Loader'
import {IoCreateOutline} from 'react-icons/io5'
import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import {toast} from 'react-hot-toast'
import { useAddTodoMutation } from '../provider/queries/todoQuery';

const Home = () => {
    const [addtodo,response] = useAddTodoMutation();
  const initalivalue ={
    title:"",
    description:""
  }

  const validationschema = yup.object({
    title : yup.string().required("Title is required"),
    description : yup.string().required("Description is required"),
  })

  const handleOnSubmit = async(e,{resetForm})=>{
      try {
            const  {data,error} =await addtodo(e);
            if(data){

            toast.success("todo create");
            }
            if(error){
              toast.error(error.data.message)
            }

            resetForm();
      } catch (error) {
          toast.error(error.message)
      }
  }

  // if(true){
  //   return <Loader/>
  // }
  return (
    <div className='min-h-[90vh] w-full flex justify-center items-center ' >

      <div className="lg:w-2/6 md:w-1/2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105  rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
      <Formik initialValues={initalivalue} validationSchema={validationschema} onSubmit={handleOnSubmit} >
      <Form>
  <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center flex justify-center items-center">Add Todo <IoCreateOutline  className='ml-4 text-2xl'/> </h2>
  <div className="relative mb-4">
    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Title</label>
    <Field type="text"  name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    <p className='text-red-500'>
      <ErrorMessage name='title' />
    </p>
  </div>
  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Description</label>
    <Field component="textarea" rows={3} name="description" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    <p className='text-red-500'>
      <ErrorMessage name='description' />
    </p>
  </div>
  <button disabled={response?.isLoading} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create</button>
 
      </Form>
      </Formik>
</div>

    </div>
  )
}

export default Home