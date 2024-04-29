import styled from "styled-components";
import React, {useState} from "react";

const NumberSelector = (selectedNum, setSelectedNum) => {

    const arrayNum = [1, 2, 3, 4, 5, 6];

    return(
        <>
        <NumberSelectorContainer>
            <div className="flex">
                {arrayNum.map((value, index) => <Box isSelected={value == selectedNum} key={index} onClick={() => setSelectedNum(value)}>  {value} </Box>)}
            </div>

            <p>Select Number</p>
        </NumberSelectorContainer>
        </>
    );
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .flex{
        display: flex;
        gap: 24px;
        cursor: pointer;
    }

    p{
        font-size: 24px;
        font-weight: 700px;
    }
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`