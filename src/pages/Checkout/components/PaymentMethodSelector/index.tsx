import { useState } from 'react'
import { TitleWithIcon } from '../TitleWithIcon'
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  PaymentMethodButton,
  PaymentMethodButtonContainer,
  PaymentMethodCard,
} from './styles'

enum PAYMENT_METHOD {
  'CREDIT' = 'CREDIT',
  'DEBIT' = 'DEBIT',
  'MONEY' = 'MONEY',
}

export function PaymentMethodSelector() {
  const [paymentMethod, setPaymentMethod] = useState<
    PAYMENT_METHOD | undefined
  >(undefined)

  const handlePaymentMethod = (paymentMethod: PAYMENT_METHOD) => {
    setPaymentMethod(paymentMethod)
  }

  return (
    <PaymentMethodCard>
      <TitleWithIcon
        Icon={<CurrencyDollar size={22} />}
        title="Pagamento"
        subTitle="O Pagamento é feito na entrega. Escolha a forma que deseja pagar"
        iconColor="purple"
      />

      <PaymentMethodButtonContainer>
        <PaymentMethodButton
          type="button"
          onClick={() => handlePaymentMethod(PAYMENT_METHOD.CREDIT)}
          $isSelect={paymentMethod === PAYMENT_METHOD.CREDIT}
        >
          <CreditCard size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </PaymentMethodButton>

        <PaymentMethodButton
          type="button"
          onClick={() => handlePaymentMethod(PAYMENT_METHOD.DEBIT)}
          $isSelect={paymentMethod === PAYMENT_METHOD.DEBIT}
        >
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </PaymentMethodButton>

        <PaymentMethodButton
          type="button"
          onClick={() => handlePaymentMethod(PAYMENT_METHOD.MONEY)}
          $isSelect={paymentMethod === PAYMENT_METHOD.MONEY}
        >
          <Money size={16} />
          <span>DINHEIRO</span>
        </PaymentMethodButton>
      </PaymentMethodButtonContainer>
    </PaymentMethodCard>
  )
}
