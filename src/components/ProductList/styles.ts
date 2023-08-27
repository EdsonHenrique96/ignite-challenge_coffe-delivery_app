import styled from 'styled-components'

export const CoffeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h1 {
    font-family: 'baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }
`

export const CoffeListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;

  div {
    background-color: ${(props) => props.theme.base['button']};
    width: 100%;
    height: 310px;
  }
`
