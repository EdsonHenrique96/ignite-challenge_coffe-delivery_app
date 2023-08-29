import { Minus, Plus } from '@phosphor-icons/react'
import { IncrementButtonContainer } from './styles'

export function IncrementButton() {
  return (
    <IncrementButtonContainer>
      <button type="button">
        <Minus size={14} weight="bold" />
      </button>
      <span>1</span>
      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </IncrementButtonContainer>
  )
}
