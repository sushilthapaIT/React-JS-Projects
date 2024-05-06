import styled from "styled-components";
import React, {useState} from "react";

const RollDice = () => {

    const [currentDice, setCurrentDice] = useState();

    const genRandomNum = (min, max) => {
        const res = Math.floor(Math.random() * (max - min) + min )
        console.log(res)
     };

     const rollDice = () => {
        const randomNum = genRandomNum(1, 7);
        setCurrentDice((prev) => randomNum)
     }

    return(
        <>
        <DiceContainer>
            <div onClick={rollDice} className="dice">
                <img src={`./images/dice/dice_${setCurrentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
        </>
    );
}

export default RollDice


const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    .dice{
        cursor: pointer;

    }

    p{
        font-size: 24px;
    }
`