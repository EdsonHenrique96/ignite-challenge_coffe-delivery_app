import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'

import {
  AddressCard,
  AddressFormInput,
  AddressInputsContainer,
  ButtonWithIcon,
  CartItem,
  CartItemButtonsCotnainer,
  CheckoutForm,
  CheckoutSection,
  ComfirmPurchaseButton,
  PaymentMethodButtonContainer,
  PaymentMethodCard,
  PurchaseSummary,
  PurchaseSummaryLine,
  RemoveItemButton,
  ResumeCheckoutCard,
} from './styles'
import { TitleWithIcon } from './components/TitleWithIcon'
import { IncrementButton } from '../../components/IncrementButton'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { FormartCurrency } from '../../helpers'

export function Checkout() {
  const { itemsOnCart, removeItemFromCart, updateUnitsItem } =
    useContext(CartContext)

  const shippingPrice = itemsOnCart.length > 0 ? 3.5 : 0

  return (
    <>
      <CheckoutForm action="">
        <CheckoutSection>
          <h2>Complete seu pedido</h2>

          <AddressCard>
            <TitleWithIcon
              Icon={<MapPinLine size={22} />}
              title="Endereço de Entrega"
              subTitle="Informe o endereço onde deseja receber seu pedido"
              iconColor="yellow"
            />

            <AddressInputsContainer>
              <AddressFormInput
                type="text"
                name=""
                id=""
                placeholder="CEP"
                className="item-1"
              />
              <AddressFormInput
                type="text"
                name=""
                id=""
                placeholder="Rua"
                className="item-2"
              />
              <AddressFormInput
                type="number"
                name=""
                id=""
                placeholder="Número"
                className="item-3"
              />
              <AddressFormInput
                type="text"
                name=""
                id=""
                placeholder="Complemento"
                className="item-4"
              />
              <AddressFormInput
                type="text"
                name=""
                id=""
                placeholder="Bairro"
                className="item-5"
              />
              <AddressFormInput
                type="text"
                name=""
                id=""
                placeholder="Cidade"
                className="item-6"
              />
              <AddressFormInput
                type="text"
                name=""
                id=""
                placeholder="UF"
                className="item-7"
              />
            </AddressInputsContainer>
          </AddressCard>

          <PaymentMethodCard>
            <TitleWithIcon
              Icon={<CurrencyDollar size={22} />}
              title="Pagamento"
              subTitle="O Pagamento é feito na entrega. Escolha a forma que deseja pagar"
              iconColor="purple"
            />

            <PaymentMethodButtonContainer>
              <ButtonWithIcon type="button">
                <CreditCard size={16} />
                <span>CARTÃO DE CRÉDITO</span>
              </ButtonWithIcon>

              <ButtonWithIcon type="button">
                <Bank size={16} />
                <span>CARTÃO DE DÉBITO</span>
              </ButtonWithIcon>

              <ButtonWithIcon type="button">
                <Money size={16} />
                <span>DINHEIRO</span>
              </ButtonWithIcon>
            </PaymentMethodButtonContainer>
          </PaymentMethodCard>
        </CheckoutSection>

        <CheckoutSection>
          <h2>Cafés selecionados</h2>
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
                      return (price +=
                        itemOnCart.product.price * itemOnCart.units)
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
                      return (price +=
                        itemOnCart.product.price * itemOnCart.units)
                    }, 0) + shippingPrice,
                  )}
                </span>
              </PurchaseSummaryLine>
            </PurchaseSummary>

            <ComfirmPurchaseButton type="submit">
              CONFIRMAR PEDIDO
            </ComfirmPurchaseButton>
          </ResumeCheckoutCard>
        </CheckoutSection>
      </CheckoutForm>
    </>
  )
}
