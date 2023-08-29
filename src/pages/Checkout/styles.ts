import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: space-between;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.base['card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const AddressCard = styled(Card)`
  gap: 2rem;
`

export const PaymentMethodCard = styled(Card)`
  gap: 2rem;
`

export const ResumeCheckoutCard = styled(Card)`
  width: 28rem;
  gap: 1.5rem;
  border-radius: 6px 44px 6px 44px;
`

export const AddressInputsContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 2.625rem;
  grid-template-rows: auto;
  grid-gap: 1rem 0.75rem;
  grid-template-areas: 'item1 . .' 'item2 item2 item2' 'item3 item4 item4' 'item5 item6 item7';

  .item-1 {
    grid-area: item1;
  }

  .item-2 {
    grid-area: item2;
  }

  .item-3 {
    grid-area: item3;
  }

  .item-4 {
    grid-area: item4;
  }

  .item-5 {
    grid-area: item5;
  }

  .item-6 {
    grid-area: item6;
  }

  .item-7 {
    grid-area: item7;
  }
`

export const AddressFormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme.base['input']};
`

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  padding: 1rem;
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

export const ComfirmPurchaseButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow']};
  width: 100%;
  color: ${(props) => props.theme.base['white']};
`

export const ButtonWithIcon = styled(BaseButton)`
  width: fit-content;
  gap: 0.75rem;
  background-color: ${(props) => props.theme.base['button']};
  color: ${(props) => props.theme.base['text']};

  span {
    font-size: 0.875rem;
    line-height: 1.3;
  }

  svg {
    color: ${(props) => props.theme['purple']};
  }
`

export const PaymentMethodButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const CheckoutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &:first-child {
    width: 40rem;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
  }
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
