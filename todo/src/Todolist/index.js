import React,{useState} from "react";
// import styled from "styled-components";
import Trash from "./trash.png"
// import Check from "./check.png"
import styled, {css} from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

const Check = styled.button`
    border-radius: 50px;
    border: 3px solid #106cde;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    ${(props) =>
    props.isDone &&
    css`
    background-color: #106cde;
    `}
`;


const Yeah = styled.div`
font-family: "Fantasy cursive";
font-size: 27px;
font-weight: 600;
color: #B8E8FC;
background-color: #0A0425;
width: 200px;
margin-left: 10px;
`
const Image = styled.img`
width: 18px;
height:18px;
margin-left: 40px;
`
const Todowrapper = styled.div`
display: flex;
flex-direction: row;
background-color: #0A0425;
width: 90%;
align-items: center;
margin-left: 10px;
margin-top: 9px;
border-radius: 10px;
`
function Todolist({todos, switchStatus, deleteTodo}) {
    console.log(todos);
    return  <Wrapper>
        {todos.map((todo) => (
            <Todowrapper>
            <Check onClick={() => {switchStatus(todo.id)}} isDone={todo.isDone}/>
            <Yeah>{todo.text}
            </Yeah>
            <Image src = {Trash} onClick={() => {
                console.log(todo)
                deleteTodo(todo.id)
                }}>
            </Image>
            </Todowrapper>
        ))}
    </Wrapper>

    }
    export default Todolist;
    