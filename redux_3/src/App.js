import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Todos from './pages/Todos';
import {Toaster} from 'react-hot-toast';
import Loader from './Components/Loader';

const App = () => {
  const [mount,setMount] = useState(true);
  useEffect(()=>{
    setMount(false)
  },[])
  if(mount){
    return <Loader/>
  }
  return (
    <div>
          <BrowserRouter>
          <Navbar/>
          <Toaster/>
          <Routes>
                <Route  path='/' Component={Home} />
                <Route  path='/todos' Component={Todos} />
          </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
