import styled from 'styled-components'

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  border: 0;
  padding: 8px;
  width: 38px;
  height: 38px;
`
