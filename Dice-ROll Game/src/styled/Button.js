import styled from "styled-components"

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;


    &:hover{
        background-color: #f0f0f0;
        border: 1px solid black;
        color: black;
    }
`