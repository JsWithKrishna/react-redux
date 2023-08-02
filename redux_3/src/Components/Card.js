import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'

const Card = ({img,handleOnClick,id,title,description}) => {
  return (
    
  <div className="w-full">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full mx-auto transition-all duration-300  hover:shadow-2xl">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={`https://robohash.org/${img}${id}.png?200x200`} />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{title}</h2>
            <p className="text-gray-500">{description}</p>
          </div>
         <button onClick={()=>handleOnClick(id)} className='cursor-pointer'> <RiDeleteBin6Line size={30} /></button>
        </div>
      </div>
     </div>

  )
}

export default Card