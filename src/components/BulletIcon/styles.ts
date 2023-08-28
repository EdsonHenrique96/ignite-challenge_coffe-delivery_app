import styled from 'styled-components'

interface BulletIconContainerProps {
  colorbackground: string
}

export const BulletIconContainer = styled.div<BulletIconContainerProps>`
  background-color: ${(props) =>
    props.colorbackground ?? props.theme['yellow-dark']};
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  color: ${(props) => props.theme.base['white']};
`
