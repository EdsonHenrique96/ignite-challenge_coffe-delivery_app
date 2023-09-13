import { ShoppingCart } from '@phosphor-icons/react'
import { CartButton } from './styled'
import { DefaultTheme } from '../../styles/themes/defaultTheme'
import { useContext, useMemo } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Cart() {
  const { itemsOnCart } = useContext(CartContext)

  const countItemOnCart = useMemo(
    () =>
      itemsOnCart.reduce((prev, current) => {
        return (prev += current.units)
      }, 0),
    [itemsOnCart],
  )

  return (
    <>
      <CartButton type="button">
        <ShoppingCart
          weight="fill"
          size={22}
          color={DefaultTheme['yellow-dark']}
        />

        {countItemOnCart > 0 && (
          <span className="cart-counter">{countItemOnCart}</span>
        )}
      </CartButton>
    </>
  )
}
