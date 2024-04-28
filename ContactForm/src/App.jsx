import './App.css'
import ContactForm from './ContactForm'
import React, {useState} from 'react'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((previousValue) => !previousValue)
  }

  return (
    <>
      <ContactForm />
    </>
  )
}

export default App
