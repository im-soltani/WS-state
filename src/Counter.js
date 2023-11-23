import React from "react"

class Counter extends React.Component{
constructor(){
super()
this.state={
    count:1,
    timer:0

    
}
}

increment=()=>{
this.setState({count:this.state.count + 1})
}
decrement=()=>{
    if(this.state.count >0){
    this.setState({count:this.state.count - 1})
    }
}
 


componentDidMount(){
    setInterval(()=>(this.setState({timer:this.state.timer + 1}) ),1000)
}
render(){
    return(
        <div>
            <button onClick={this.increment}>+</button>
            <p>{this.state.count}</p>
               <button onClick={this.decrement}>-</button>
   <p>{this.state.timer}</p>
        </div>
    )
}
}
export default Counter