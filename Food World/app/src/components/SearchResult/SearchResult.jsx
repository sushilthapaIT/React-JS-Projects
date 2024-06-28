import React from 'react'
import styled from 'styled-components'

const SearchResult = (data) => {
  return (
    <FoodContainer>
        <FoodCards>{data?.map((food, i) => <FoodCard key={i}>{food.text}</FoodCard>)}</FoodCards>
    </FoodContainer>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  height: calc(100vh - 210px);
  background-size: cover;
`;

const FoodCards = styled.div`

`;

const FoodCard = styled.div`

`;