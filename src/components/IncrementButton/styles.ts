import styled from 'styled-components'

export const IncrementButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.base['button']};
  height: 2.375rem;
  gap: 0.25rem;
  border-radius: 6px;
  width: fit-content;

  span {
    font-size: 1rem;
    padding: 0.5rem;
    line-height: 1.1;
  }

  button {
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme['purple']};
    padding: 0.5rem;
  }
`
