import React,{useState} from "react";
import styled from "styled-components";

const Input = styled.input`
font-size: 24px;
width: 50%;
margin-left: 10px;
margin-top: 10px;
border: none;
height: 40px;
border-radius: 10px;
background-color: white;
`;

const Wrapper = styled.div`
background-color: #384E77;
display: flex;
`



const Button = styled.button`
width: 100px;
height: 50px;
color: blue;
font-size: 30px;
font-family: "Fantasy cursive";
border-radius: 10px;
border: 5px blue solid;
padding-left: 10px;
margin-left: 50px;
margin-top: 5px;
background-color: #a2d2ff;
`;



function Todoadd({todos, updateTodo}){

    const [todo, setTodo] = useState({

        id: null,
        text: "",
    });

        console.log(todo)
    const addTodo = (e) => {
       const { name, value } = e.target;
        setTodo({
            id: todos.length + 1,
            text: value,
        })
    };
const onClickChange = () =>{
if(todo.text == "")
{
    alert("Please insert some text.");
    return;
}
updateTodo(todo);
setTodo({
    id: null,
    text: "",
    isDone: false,
});
}
    return (
    <Wrapper>
<Input
        type="text"
        name="text"
        value={todo.text}
        onChange={addTodo}>

    </Input> 
    <Button onClick={onClickChange}>Add</Button>
 </Wrapper>
    )
    }
 export default Todoadd;
    

