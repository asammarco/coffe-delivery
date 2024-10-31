import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CoffeesContainer = styled.div`
  width: 100%;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;

  margin-top: 7rem;
  padding: 2rem 10rem;

  h1 {
    font: 800 2rem 'Baloo 2';
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-top: 3.375rem;
  gap: 2rem;
`
