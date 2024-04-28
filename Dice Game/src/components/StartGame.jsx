import styled from 'styled-components'

const StartGame = () => {
  return (
    <container>
      <img src='/images/dices.png' alt='dice image'/>

      <div>
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>

      </div>
    </container>
  )
}

export default StartGame


const container = styled.div`
  max-width: 1180px;
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
`