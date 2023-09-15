import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.base['card']};
  border-radius: 6px;
  padding: 2.5rem;
`
