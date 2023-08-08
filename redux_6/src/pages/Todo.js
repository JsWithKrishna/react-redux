import React from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineDelete} from 'react-icons/ai'
const Card = ({onClickFun,id})=>{
    return  <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
      <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={`https://robohash.org/${id}.png`} />
      <div className="flex-grow">
        <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
        <p className="text-gray-500">UI Designer</p>
      </div>
      <AiOutlineDelete onClick={onClickFun} size={30} />
    </div>
  </div>
}

const Todo = () => {

    const handleClick = ()=>{
        toast.success('todo is delete');
    }

  return (
    <>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Todo</h1>
     
    </div>
    <div className="flex flex-col justify-center   items-center  -m-2">
                {
                    Array(10).fill(null).map((c,i)=>{
                        return <Card onClickFun={handleClick} key={i} id={i} />
                    })
                }
     
    </div>
  </div>
</section>

    </>
  )
}

export default Todo