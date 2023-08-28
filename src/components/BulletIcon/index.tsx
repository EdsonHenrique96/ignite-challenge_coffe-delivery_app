import { ShoppingCart, Coffee, Timer, Package } from '@phosphor-icons/react'
import { BulletIconContainer } from './styles'

type BulletIconTypes = 'cart' | 'timer' | 'coffee' | 'box'

interface BulletIconsProps {
  color: string
  type: BulletIconTypes
}

const iconsDict: { [key in BulletIconTypes]: React.ReactNode } = {
  cart: <ShoppingCart weight="fill" size={16} />,
  timer: <Timer weight="fill" size={16} />,
  coffee: <Coffee weight="fill" size={16} />,
  box: <Package weight="fill" size={16} />,
}

export function BulletIcon({ color, type }: BulletIconsProps) {
  return (
    <BulletIconContainer colorbackground={color}>
      {iconsDict[type]}
    </BulletIconContainer>
  )
}
