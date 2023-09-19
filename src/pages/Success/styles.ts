import styled from 'styled-components'

export const TitleContainer = styled.div`
  margin: 5rem 0 2.5rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'baloo 2', sans-serif;
    font-weight: bolder;
    line-height: 1.3;
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const ShippingInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  border: double 1px transparent;
  border-radius: 6px 36px;
  padding: 2.5rem;

  /* https://pt.stackoverflow.com/questions/353914/porque-meu-border-image-n%C3%A3o-respeita-o-border-radius */
  background-image: linear-gradient(
      ${(props) => props.theme.base['background']},
      ${(props) => props.theme.base['background']}
    ),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`

export const ShippingInformationLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  div span {
    font-weight: bold;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;
`
