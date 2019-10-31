import React from "react";
import TodoList from "./TodoList";
class Todo extends React.Component{
    render(){
    return(
<div className="todo">
    <TodoList name="Eat"
     time="20:30"
     checked= {false}/>
    <TodoList name="Sleep"
    time="00:00"
    checked= {false}/>
    <TodoList name="Wake up"
    time="6:00"
    checked= {false}/>
</div>)
}
}
/*
In case the info is given in form of json object:
import React from "react";
import TodoListAPI from "./TodoListAPI";
const infos=TodoListAPI.map((lists)=>{
    <TodoList name={lists.name} time={list.time}
})
function Todo(){
    return(
<div className="todo">
    {infos}
</div>)

 */


export default Todo;