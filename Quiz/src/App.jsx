import './App.css';

function App() {

  return (
    <>
      <div className="App">
        <h1>Quiz App</h1>

        <h2>Current Score: 2</h2>

        <div className="question-card">
          <h2>Question 1 out of 5</h2>
          <h3 className="question-text">What is the capital of USA?</h3>
          <ul>
            <li>Boston</li>
            <li>Ontario</li>
            <li>Washington DC</li>
            <li>Denver</li>
          </ul>
        </div>

        <div className="final-results">
          <h1>Final Results</h1>
          <h2>1 out of 5 correct - (20%)</h2>
          <button>Restart Game</button>
        </div>
      </div>
    </>
  )
}

export default App
