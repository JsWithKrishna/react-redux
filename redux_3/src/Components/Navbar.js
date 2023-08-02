import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

        <section className='bg-white w-full py-4 shadow-lg'>
          <nav className='flex justify-between w-[80%] mx-auto'>
            <Link to={'/'} className="logo">
              <p className='text-3xl font-bold tracking-tighter text-purple-800'>  React-Redux</p>
            </Link>
            <ul className='flex gap-4 font-light text-2xl'>
              <li className='transition-all duration-300 hover:border-b-pink-400 hover:border-b-2 cursor-pointer'>
                <Link to={'/'}>
                Home</Link>
              </li>
              <li className='transition-all duration-300 hover:border-b-pink-400 hover:border-b-2 cursor-pointer'>
                <Link to={'/todos'}>
                Todos</Link>
              </li>
            </ul>
          </nav>
        </section>

    </>
  )
}

export default Navbar