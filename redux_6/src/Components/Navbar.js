import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
            <div className="py-4 bg-white w-full shadow-xl">
                <nav className="w-[80%] mx-auto  flex justify-between">
                    <Link to={'/'} className="text-3xl text-purple-700">
                        React-Redux
                    </Link>
                    <ul className="flex gap-x-4 font-light text-2xl">
                       <Link to={'/'}> <li>Home</li></Link>
                       <Link to={'/todo'}> <li>Todo</li></Link>
                    </ul>
                </nav>
            </div>
    </>
  )
}

export default Navbar