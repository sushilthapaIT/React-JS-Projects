import React, { useState } from 'react';
import styled from 'styled-components';

const NumberSelector = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const [selectedNumber, setSelectedNumber] = useState();

    return (
    <div>
        {arrNumber.map((value, index) => (
        <Box isSelected={value === selectedNumber} key={index} onClick={() => setSelectedNumber(value)}>{value}</Box>
        ))}
    </div>
);
}

export default NumberSelector;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
