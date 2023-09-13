import styled from 'styled-components'

export const Label = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  font-size: 0.625rem;
  line-height: 1.3;
`

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.base['white']};
`

export const PriceAmount = styled.span`
  font-family: 'baloo 2', sans-serif;
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 900;
`

export const CardContent = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-family: 'baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    text-align: center;
  }

  .product-description {
    color: ${(props) => props.theme.base['label']};
    text-align: center;
    padding-top: 0.5rem;
  }
`

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.base['card']};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 0.75rem;
    top: -1.25rem;
  }
`
