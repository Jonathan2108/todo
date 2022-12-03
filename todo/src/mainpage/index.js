import React,{useState} from "react";
import styled from "styled-components";
import Tododate from "../Tododate";
import Todoleft from "../Todoleft";
import Todoadd from "../Todoadd";
import Todolist from "../Todolist";

const Wrapper = styled.div`
background-color: #0A0425;
height: 100vh;
display: flex;
`

const Box = styled.div`  //Box on right
background-color: #384E77;
height: 70vh;
width: 50vh;
display: flex;
flex-direction: column;
margin-top: 100px;
margin-left: 220px;
border-radius: 10px;
border: 5px white solid;
`
const Label = styled.div`
font-size: px;
font-weight: 600;
color: #B1B2FF;
font-family: "Fantasy cursive";
margin-right: 30px;
`
const Example= styled.div`
background-color: #000000;
height: 70vh;
width: 50vh;
display: flex;
margin-top: 100px;
margin-left: 180px;
border-radius: 10px;
border: 5px white solid;
`
const Idea = styled.div`
font-size: 35px;
font-weight: 600;
color: #B1B2FF;
font-family: "Fantasy cursive";
text-align: center;
margin-top: 10px;
padding-left: 90px;
`
const Input = styled.input`
font-size: 24px;
width: 80%;
margin-bottom: 35px;
border: none;
height: 40px;
background-color: #a2d2ff;
`;



function MainPage(){
const [todos, setTodos] = useState([]);
console.log(todos);
const addTodo = (todo) => {
    setTodos([...todos, todo]);
};

const changeIsDone = (id) => {
   var currentTodo;
   for(var i = 0; i< todos.length; i++)
   {
    if(todos[id][`id`]== id)
   {
    currentTodo = todos[i]
   }
   }

   currentTodo.isDone = !currentTodo.isDone;
   setTodos([...todos]);
};

const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !=id);
    setTodos(newTodos);
}


return (
    <Wrapper>
    
        <Box>
        <Tododate />
        <Todoleft todos={todos} updateTodo={addTodo}/>
        <Todoadd todos={todos} updateTodo={addTodo}/>
        <Todolist 
        todos={todos}
        switchStatus={changeIsDone}
        deleteTodo={removeTodo}
        />
         </Box>
        <Example>

        </Example>

    </Wrapper>


)
}
export default MainPage;
