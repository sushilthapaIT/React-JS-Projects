import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);  
  }

  const resetScore = () => {
    setScore(0);
  }

  const rollDice = () => {

    if(!selectedNumber){
      setError("You have not selected any number!!!")
      return
    }

    setError("");

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if(selectedNumber === randomNumber){
      setScore(p => p + randomNumber);
    }
    else{
      setScore(p => p - 2);
    }

    setSelectedNumber(undefined);
  }

  return (
    <MainContainer>
      <div className='top-section'>
        <TotalScore score={score}/>
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}/>
      <div className='buttons'>
        <OutlineButton onClick={{resetScore}}>Reset</OutlineButton>
        <Button>Show Rules</Button>
      </div>
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.main`

  padding-top: 0px;

  .top-section{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`