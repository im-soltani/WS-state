import { useState } from "react"

const Counter2=()=>{
    let[count,setCount]=useState(2)
    const increment=()=>{
        setCount(count ++)
    }
    const decrement=()=>{
        if(count > 0){
        setCount(count -1)
        }
    }
return(
    <div>
    <button onClick={increment} >+</button>
    <p>{count}</p>
    <button onClick={decrement}>-</button>
</div>
)
}
export default Counter2