import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import React, {useState} from "react";

const GamePlay = () => {

    const [score, setScore] = useState();

    const [selectedNum, setSelectedNum] = useState();

    const [currentDice, setCurrentDice] = useState(1);

    return(
        <MainContainer className="main-container">
            <div className="top-section">
                <TotalScore />
                <NumberSelector selectedNum={selectedNum} setSelectedNum={setSelectedNum}/>
            </div>

            <RollDice currentDice={currentDice} rollDice={rollDice}/>
        </MainContainer>
    );
}

export default GamePlay

const MainContainer = styled.div`
    padding-top: 70px;

.top-section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}

`