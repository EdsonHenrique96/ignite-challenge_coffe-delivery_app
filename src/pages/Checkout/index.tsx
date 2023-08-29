import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import ExpressoTradicionaImg from '../../assets/expresso.png'
import CaffeLatteImg from '../../assets/latte.png'

import { Header } from '../../components/Header'
import {
  AddressCard,
  AddressFormInput,
  AddressInputsContainer,
  ButtonWithIcon,
  CartItem,
  CartItemButtonsCotnainer,
  CheckoutContainer,
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

export function Checkout() {
  return (
    <>
      <Header />
      <CheckoutContainer>
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
              <CartItem>
                <img src={ExpressoTradicionaImg} alt="imagem item" />

                <div>
                  <p>Expresso Tradiconal</p>
                  <CartItemButtonsCotnainer>
                    <IncrementButton />
                    <RemoveItemButton type="button">
                      <Trash size={16} />
                      <span>Remover</span>
                    </RemoveItemButton>
                  </CartItemButtonsCotnainer>
                </div>

                <div>
                  <span>R$ 9,90</span>
                </div>
              </CartItem>
              <CartItem>
                <img src={CaffeLatteImg} alt="imagem item" />

                <div>
                  <p>Expresso Tradiconal</p>
                  <CartItemButtonsCotnainer>
                    <IncrementButton />
                    <RemoveItemButton type="button">
                      <Trash size={16} />
                      <span>Remover</span>
                    </RemoveItemButton>
                  </CartItemButtonsCotnainer>
                </div>

                <div>
                  <span>R$ 9,90</span>
                </div>
              </CartItem>
              <PurchaseSummary>
                <PurchaseSummaryLine>
                  <span>Total de items</span>
                  <span>R$ 29,70</span>
                </PurchaseSummaryLine>

                <PurchaseSummaryLine>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </PurchaseSummaryLine>

                <PurchaseSummaryLine className="purchase-total">
                  <span>Total</span>
                  <span>R$ 33,20</span>
                </PurchaseSummaryLine>
              </PurchaseSummary>

              <ComfirmPurchaseButton type="submit">
                CONFIRMAR PEDIDO
              </ComfirmPurchaseButton>
            </ResumeCheckoutCard>
          </CheckoutSection>
        </CheckoutForm>
      </CheckoutContainer>
    </>
  )
}
