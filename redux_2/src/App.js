import logo from './logo.svg';
import logo2 from './redux.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from './providers/redux/counter/CounterSlice';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const [form,setForm] = useState(0);

  const value = useSelector(state=>state.counter.value);
  // console.log({value})

  return (
    <div className="App">
      <header className="App-header">
      <div className="img">
      <img src={logo} className="App-logo" alt="logo" />
      
      <img src={logo2} className="App-logo2" alt="logo" />
      </div>
            <h1>React {value} Redux</h1>

            <div className="btn" style={{gap:"4px"}}>
              <button onClick={()=>dispatch(increment())} style={{marginLeft:"3px"}}>increment</button>
              <button onClick={()=>dispatch(decrement())} style={{marginLeft:"3px"}}>Decrement</button>
              <button onClick={()=>dispatch(incrementByValue(3))} style={{marginLeft:"3px"}}>increment By value</button>
            </div>
            <input type="text" value={form} onChange={(e)=>setForm(e.target.value)} />
        <button onClick={()=>{
          if(form===0){
            return 
          }
          else{
            dispatch(incrementByValue(parseInt(form)))
          }
        }}>increment by input</button>

      </header>
    </div>
  );
}

export default App;
