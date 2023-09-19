import styled, { css } from 'styled-components'
import { Card } from '../../../../components/Card'

export const PaymentMethodCard = styled(Card)`
  gap: 2rem;
`

export const PaymentMethodButton = styled.input`
  visibility: hidden;
  display: none;
`

export const PaymentMethodButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LabelPaymentMethodButton = styled.label<{
  $isSelect?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 1rem;
  height: 51px;

  gap: 0.75rem;
  background-color: ${(props) =>
    props.$isSelect ? props.theme['purple-light'] : props.theme.base['button']};
  ${(props) =>
    props.$isSelect &&
    css`
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-dark']};
    `}
  color: ${(props) => props.theme.base['text']};

  span {
    font-size: 0.875rem;
    line-height: 1.3;
  }

  svg {
    color: ${(props) => props.theme['purple']};
  }
`
