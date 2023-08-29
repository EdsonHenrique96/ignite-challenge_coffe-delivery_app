import styled from 'styled-components'

export const HeaderContent = styled.header`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const LocaleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme['purple-dark']};
  height: 38px;

  background-color: ${(props) => props.theme['purple-light']};
`
