import styled from 'styled-components'
import { Card } from '../../../../components/Card'
import { BaseButton } from '../../../../components/BaseButton'

export const ComfirmPurchaseButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow']};
  width: 100%;
  color: ${(props) => props.theme.base['white']};

  &:disabled {
    background-color: ${(props) => props.theme.base['button']};
  }
`

export const PurchaseSummaryLine = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(.purchase-total) > span:first-child {
    font-size: 0.875rem;
  }

  &.purchase-total {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const PurchaseSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CartItemButtonsCotnainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.base['button']};
  padding-bottom: 1.5rem;

  img {
    width: 64px;
    height: 64px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  > div:last-child {
    display: flex;
    height: 100%;
    font-weight: bold;
  }
`

export const RemoveItemButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.base['button']};
  padding: 0.5rem;
  color: ${(props) => props.theme.base['text']};
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple']};
  }
`

export const ResumeCheckoutCard = styled(Card)`
  width: 28rem;
  gap: 1.5rem;
  border-radius: 6px 44px 6px 44px;
`
