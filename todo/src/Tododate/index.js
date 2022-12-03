import React,{useState} from "react";
import styled from "styled-components";

const Title = styled.div`
color: white;
font-size: 18px;
font-weight: 600;
color: #B1B2FF;
font-family: "Fantasy cursive";
margin-top: 20px;
margin-left: 20px;
`;


function Tododate(){
    const today = new Date();
    const dayName = today.toLocaleString("en-US", { weekday: "long"});
    const dateString = today.toLocaleString("en-US", {
    year: "numeric", 
    month: "long", 
    day: "numeric",
    });

    return (
<>
<Title>{dateString}</Title>
<Title>{dayName}</Title>
</>
    )
}
export default Tododate;