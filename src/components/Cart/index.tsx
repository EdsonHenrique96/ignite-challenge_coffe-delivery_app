import { ShoppingCart } from '@phosphor-icons/react'
import { CartButton } from './styled'
import { DefaultTheme } from '../../styles/themes/defaultTheme'

export function Cart() {
  return (
    <CartButton type="button">
      <ShoppingCart
        weight="fill"
        size={22}
        color={DefaultTheme['yellow-dark']}
      />
    </CartButton>
  )
}
