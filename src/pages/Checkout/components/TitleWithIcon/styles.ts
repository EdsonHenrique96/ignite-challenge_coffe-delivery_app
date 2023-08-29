import styled from 'styled-components'

export const AddressFormTitle = styled.div<{
  $iconColor: 'yellow' | 'purple'
}>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[`${props.$iconColor}-dark`]};
  }
`

export const AddressFormTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.875rem;
    margin-left: calc(22px + 0.5rem);
  }
`
