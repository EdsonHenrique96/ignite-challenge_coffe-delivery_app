import styled from 'styled-components'

export const IntroductionContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  padding: 6rem 0;
`

export const IntroductionDescription = styled.div`
  h1 {
    font-family: 'baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
  }

  p.sub-title {
    font-size: 1.25rem;
  }

  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  width: 100%;
`

export const IntroductionBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem 2.5rem;

  p {
    font-size: 0.875rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const IntroductionImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
