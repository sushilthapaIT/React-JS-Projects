// project completed
// 2023/06/29

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResult from './components/SearchResult/SearchResult';

export const BASE_URL = "http://localhost:9000"; //adding export so that we can use this url in another component as well

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError(`Unable to fetch data. Please try again. ${error}`);
        setLoading(false); 
      }
    };
    fetchFoodData();
  }, []); 

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if(searchValue === ""){
      setFilteredData(data);
      return;
    }

    const filter = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if(type === "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },    
    {
      name: "Lunch",
      type: "lunch",
    },    
    {
      name: "Dinner",
      type: "dinner",
    },
  ]

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src='./logo.svg' alt='logo' />
          </div>

          <div className='search'>
            <input onChange={searchFood} placeholder='Search food...' type='text'/>
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button isSelected={selectedBtn === value.type} key={value.name} onClick={() => filterFood(value.type)}>{value.name}</Button>
          ))}
        </FilterContainer>
      </Container>

      <SearchResult data={filteredData}/>
    </>
  )
}

export default App


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: ${({isSelected}) => (isSelected ? "#f22f2f" : "#ff4343")}; // according to selected button making its active and inactive
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: #6e0d0d;
  }
`;
