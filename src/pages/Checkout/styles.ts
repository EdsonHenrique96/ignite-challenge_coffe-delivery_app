import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: space-between;
`

export const CheckoutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &:first-child {
    width: 40rem;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
  }
`
