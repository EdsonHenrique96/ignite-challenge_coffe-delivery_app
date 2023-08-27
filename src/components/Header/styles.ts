import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
