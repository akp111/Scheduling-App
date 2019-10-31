import React from "react";

class TodoList extends React.Component{
    //console.log(prop)
    constructor(prop)
    {
        super()
        this.state={name:prop.name,
        check:prop.checked,
        time:prop.time
    }
        this.action=this.action.bind(this);
        
    }
    action(){
        this.setState((prev)=>{
            return {
                check: !(prev.check)
            }

        })
    }

     
    render(){
       
    return(
    <div>
        <input type="checkbox" checked={this.state.check} onChange={this.action} ></input>
        <p style={
            
                this.state.check? 
                {
                    fontStyle:"italic",
                    color:"red",
                    textDecoration:"line-through"
                }:null
            
        }>Task: {this.state.name}</p>
        <p
         style={
            
            this.state.check? 
            {
                fontStyle:"italic",
                color:"red",
                textDecoration:"line-through"
            }:null}>Time: {this.state.time}</p>

    </div>
     
    
    );
    }
}

export default TodoList