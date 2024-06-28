import React from 'react';
import styled from 'styled-components';

// Component to render search results
const SearchResult = ({ data }) => {
  return (
    <FoodContainer>
      <FoodCards>
        {data?.map((food, i) => (
          <FoodCard key={i}>
            <div className='food-image'>
              <img src={food.img} alt='image of food' />
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodContainer>
  );
};

export default SearchResult;

// Styled component for the container of all food cards
const FoodContainer = styled.section`
  background-image: url("/bg.png");
  height: calc(100vh - 210px);
  background-size: cover;
`;

// Styled component for the container holding multiple food cards
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
`;

// Styled component for each individual food card
const FoodCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .food-image img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
