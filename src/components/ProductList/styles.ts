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
  grid-gap: 2.5rem 1rem;
  padding-bottom: 1rem;
`
