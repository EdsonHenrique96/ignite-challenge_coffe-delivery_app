import { createContext, useCallback, useState } from 'react'
import { Product } from '../../models/Product'

interface CartItems {
  product: Product
  units: number
}

interface CartContextModel {
  itemsOnCart: CartItems[]
  addItemOnCart: (data: CartItems) => void
  removeItemFromCart: (itemId: string) => void
  updateUnitsItem: (productId: string, newUnits: number) => void
}

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext<CartContextModel>({
  itemsOnCart: [],
  addItemOnCart: () => undefined,
  removeItemFromCart: () => undefined,
  updateUnitsItem: () => undefined,
})

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItems[]>([])

  const addItemOnCart = useCallback(
    ({ product, units }: CartItems) => {
      const updatedCart = [...cart]

      const existentProductIndex = updatedCart.findIndex(
        (data) => data.product.id === product.id,
      )

      if (existentProductIndex >= 0) {
        console.log(updatedCart[existentProductIndex].units, units)
        updatedCart[existentProductIndex].units += units
      } else {
        updatedCart.push({ product, units })
      }

      setCart(updatedCart)
    },
    [cart, setCart],
  )

  const removeItemFromCart = (itemId: string) => {
    setCart((prevState) => {
      return prevState.filter((item) => item.product.id !== itemId)
    })
  }

  const updateUnitsItem = (productId: string, newUnits: number) => {
    const updatedCart = cart.map(({ product, units }) => {
      if (product.id === productId) {
        return {
          product,
          units: newUnits,
        }
      }

      return {
        product,
        units,
      }
    })

    setCart(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{
        itemsOnCart: cart,
        addItemOnCart,
        removeItemFromCart,
        updateUnitsItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
