import styled from 'styled-components'

export const IntroductionContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  height: 34rem;
  padding: 6rem 0;
`

export const IntroductionDescription = styled.div`
  h1 {
    font-family: 'baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
  }

  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  width: 100%;
`

export const IntroductionBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const IntroductionImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
