import styled from 'styled-components'
import { Card } from '../../../../components/Card'

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

export const AddressCard = styled(Card)`
  gap: 2rem;
`
