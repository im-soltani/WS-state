
import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Counter2 from './Counter2';



function App() {
const [show,setShow]=useState(false)

const handelShow=()=>{
setShow(!show)
}
  return (
    <div className="App">
      <button onClick={handelShow}>{show? "Hide Counter" :"show Counter"}</button>
      {
        show &&  <Counter  /> 
      }
     
    </div>
  );
}

export default App;
