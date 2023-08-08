import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Todo from './pages/Todo';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
   <>
    <BrowserRouter>
            <Navbar/>
            <Toaster/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/todo' element={<Todo/>} />
          </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
