import styled from 'styled-components'

export const CartButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  border: 0;
  padding: 8px;
  width: 38px;
  height: 38px;

  .cart-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.base['white']};
    font-weight: bold;
    font-size: 0.75rem;
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`
