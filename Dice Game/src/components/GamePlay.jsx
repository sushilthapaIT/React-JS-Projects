import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";


const GamePlay = () => {
    return(
        <MainContainer className="main-container">
            <div className="top-section">
                <TotalScore />
                <NumberSelector />
            </div>

            <RollDice />
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