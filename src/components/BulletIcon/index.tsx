import {
  ShoppingCart,
  Coffee,
  Timer,
  Package,
  MapPin,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { BulletIconContainer } from './styles'

type BulletIconTypes = 'cart' | 'timer' | 'coffee' | 'box' | 'map_pin' | 'money'

interface BulletIconsProps {
  color: string
  type: BulletIconTypes
}

const iconsDict: { [key in BulletIconTypes]: React.ReactNode } = {
  cart: <ShoppingCart weight="fill" size={16} />,
  timer: <Timer weight="fill" size={16} />,
  coffee: <Coffee weight="fill" size={16} />,
  box: <Package weight="fill" size={16} />,
  map_pin: <MapPin weight="fill" size={16} />,
  money: <CurrencyDollar weight="fill" size={16} />,
}

export function BulletIcon({ color, type }: BulletIconsProps) {
  return (
    <BulletIconContainer $colorbackground={color}>
      {iconsDict[type]}
    </BulletIconContainer>
  )
}
