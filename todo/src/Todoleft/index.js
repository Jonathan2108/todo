import React,{useState} from "react";
import styled from "styled-components";




function Todoleft({todos, updateTodo}){
   const completed = todos.filter((todo) => todo.isDone == true);
    return (<>{todos.length} Tasks, {completed.length} completed</>)
    

    
}
export default Todoleft;