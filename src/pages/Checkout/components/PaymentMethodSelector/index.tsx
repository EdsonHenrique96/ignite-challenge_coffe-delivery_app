import { useState } from 'react'
import { TitleWithIcon } from '../TitleWithIcon'
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  LabelPaymentMethodButton,
  PaymentMethodButton,
  PaymentMethodButtonContainer,
  PaymentMethodCard,
} from './styles'
import { useFormContext } from 'react-hook-form'

enum PAYMENT_METHOD {
  'CREDIT' = 'CREDIT',
  'DEBIT' = 'DEBIT',
  'MONEY' = 'MONEY',
}

export function PaymentMethodSelector() {
  const { register } = useFormContext()
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
          {...register('metodoDePagamento')}
          id="paymentMethod-credit"
          type="radio"
          onClick={() => handlePaymentMethod(PAYMENT_METHOD.CREDIT)}
          value={PAYMENT_METHOD.CREDIT.toString()}
        />
        <LabelPaymentMethodButton
          htmlFor="paymentMethod-credit"
          $isSelect={paymentMethod === PAYMENT_METHOD.CREDIT}
        >
          <CreditCard size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </LabelPaymentMethodButton>
        <PaymentMethodButton
          {...register('metodoDePagamento')}
          id="paymentMethod-debit"
          type="radio"
          onClick={() => handlePaymentMethod(PAYMENT_METHOD.DEBIT)}
          value={PAYMENT_METHOD.DEBIT.toString()}
        />

        <LabelPaymentMethodButton
          htmlFor="paymentMethod-debit"
          $isSelect={paymentMethod === PAYMENT_METHOD.DEBIT}
        >
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </LabelPaymentMethodButton>
        <PaymentMethodButton
          {...register('metodoDePagamento')}
          id="paymentMethod-money"
          type="radio"
          onClick={() => handlePaymentMethod(PAYMENT_METHOD.MONEY)}
          value={PAYMENT_METHOD.MONEY.toString()}
        />
        <LabelPaymentMethodButton
          htmlFor="paymentMethod-money"
          $isSelect={paymentMethod === PAYMENT_METHOD.MONEY}
        >
          <Money size={16} />
          <span>DINHEIRO</span>
        </LabelPaymentMethodButton>
      </PaymentMethodButtonContainer>
    </PaymentMethodCard>
  )
}
