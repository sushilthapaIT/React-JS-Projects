import styled from 'styled-components'

const StartGame = () => {
  return (
    <Container>
      <div>
        <img src='dices.png' alt='dice image'/>
      </div>

      <div>
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>

      </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
`