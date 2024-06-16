import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img alt='image of dice' src='./images/dices.png'/>
        </div>

        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content{
        h1{  //sass css properties
            font-size: 96px;
            white-space: nowrap;
        }
    }
`

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;


    &:hover{
        background-color: #f0f0f0;
        border: 1px solid black;
        color: black;
    }
`