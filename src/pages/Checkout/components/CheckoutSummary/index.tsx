import { FormartCurrency } from '../../../../helpers'
import { Trash } from '@phosphor-icons/react'
import { IncrementButton } from '../../../../components/IncrementButton'
import {
  CartItem,
  CartItemButtonsCotnainer,
  ComfirmPurchaseButton,
  PurchaseSummary,
  PurchaseSummaryLine,
  RemoveItemButton,
  ResumeCheckoutCard,
} from './styles'
import { useCart } from '../../../../hooks/useCart'
import { useFormContext } from 'react-hook-form'

export function CheckoutSummary() {
  const {
    formState: { isValid },
  } = useFormContext()
  const { itemsOnCart, removeItemFromCart, updateUnitsItem } = useCart()

  const shippingPrice = itemsOnCart.length > 0 ? 3.5 : 0

  return (
    <ResumeCheckoutCard>
      {itemsOnCart.map(({ product, units }) => (
        <CartItem>
          <img src={product.image} alt="imagem item" />

          <div>
            <p>{product.name}</p>
            <CartItemButtonsCotnainer>
              <IncrementButton
                value={units}
                updateValue={(newValue: number) => {
                  updateUnitsItem(product.id, newValue)
                }}
              />
              <RemoveItemButton
                type="button"
                onClick={() => removeItemFromCart(product.id)}
              >
                <Trash size={16} />
                <span>Remover</span>
              </RemoveItemButton>
            </CartItemButtonsCotnainer>
          </div>

          <div>
            <span>{FormartCurrency(product.price)}</span>
          </div>
        </CartItem>
      ))}

      <PurchaseSummary>
        <PurchaseSummaryLine>
          <span>Total de items</span>
          <span>
            {FormartCurrency(
              itemsOnCart.reduce((price, itemOnCart) => {
                return (price += itemOnCart.product.price * itemOnCart.units)
              }, 0),
            )}
          </span>
        </PurchaseSummaryLine>

        <PurchaseSummaryLine>
          <span>Entrega</span>
          <span>{FormartCurrency(shippingPrice)}</span>
        </PurchaseSummaryLine>

        <PurchaseSummaryLine className="purchase-total">
          <span>Total</span>
          <span>
            {FormartCurrency(
              itemsOnCart.reduce((price, itemOnCart) => {
                return (price += itemOnCart.product.price * itemOnCart.units)
              }, 0) + shippingPrice,
            )}
          </span>
        </PurchaseSummaryLine>
      </PurchaseSummary>

      <ComfirmPurchaseButton type="submit" disabled={!isValid}>
        CONFIRMAR PEDIDO
      </ComfirmPurchaseButton>
    </ResumeCheckoutCard>
  )
}
