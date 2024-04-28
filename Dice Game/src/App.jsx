import StartGame from './components/StartGame.jsx'
import GamePlay from './components/StartGame.jsx'
import React, {useState} from 'react'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((previous) => !previous);
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay}/>
    }    
    </>
  )
}

export default App
