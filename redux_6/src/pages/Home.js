import React from "react";
import {FaRegEdit} from 'react-icons/fa';
import  * as  yup from 'yup';
import {Formik,Form,Field,ErrorMessage} from 'formik'; 

const Home = () => {

        const validationSchema = yup.object({
            title:yup.string().required("Title is required"),
            description:yup.string().required("description is required"),
        })
        const initalivalues={
            title:"",
            description:""
        }
        const onSubmitHandle =(e,{resetForm})=>{
            console.log(e);
            resetForm();
        }


  return (
    <>
      <div className="min-h-[90vh] flex justify-center items-center">
      <Formik validationSchema={validationSchema} initialValues={initalivalues} onSubmit={onSubmitHandle}>
      <Form className="lg:w-2/6 md:w-1/2 transition-all duration-300 hover:shadow-2xl shadow-xl rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5 flex justify-center gap-2">
            Add Todo{" "}<FaRegEdit size={30} />
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Title
            </label>
            <Field
              type="text"
              name="title"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <p className="text-red-500">
                <ErrorMessage name="title" />
            </p>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Description
            </label>
            <Field
            as={"textarea"}
              rows={4}
              id="email"
              name="description"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
              <p className="text-red-500">
                <ErrorMessage name="description" />
            </p>
          </div>
          <div className="">
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Create
            </button>
          </div>
        </Form>
      </Formik>
      </div>
    </>
  );
};

export default Home;















