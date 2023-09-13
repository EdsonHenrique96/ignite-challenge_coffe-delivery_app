import { Minus, Plus } from '@phosphor-icons/react'
import { IncrementButtonContainer } from './styles'

interface IncrementButtonProps {
  value: number
  updateValue: (newValue: number) => void
}

export function IncrementButton({ value, updateValue }: IncrementButtonProps) {
  const handleIncrementValue = () => {
    updateValue(value + 1)
  }

  const handleDecrementValue = () => {
    if (value <= 1) return
    updateValue(value - 1)
  }

  return (
    <IncrementButtonContainer>
      <button type="button" onClick={handleDecrementValue}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{value}</span>
      <button type="button" onClick={handleIncrementValue}>
        <Plus size={14} weight="bold" />
      </button>
    </IncrementButtonContainer>
  )
}
