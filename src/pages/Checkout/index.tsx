import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

import { CheckoutForm, CheckoutSection } from './styles'
import { CheckoutSummary } from './components/CheckoutSummary'
import { useForm, FormProvider } from 'react-hook-form'
import { OrderAddressForm } from './components/OrderAddressForm'
import { PaymentMethodSelector } from './components/PaymentMethodSelector'

const addressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Deve ter no mínimo 8 digitos')
    .max(9, 'Deve ter no máximo 9 digitos'),
  rua: zod.string().nonempty('Informe a rua'),
  numero: zod.number().positive('Deve ser um numero positivo'),
  complemento: zod.string().optional(),
  bairro: zod.string().nonempty('Informe o bairro'),
  cidade: zod.string().nonempty('Informe a cidade'),
  uf: zod
    .string()
    .length(2, 'Adicione a sigla do seu estado, Ex. São Paulo = SP'),
})

type addressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const checkoutForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      complemento: '',
      numero: undefined,
      uf: '',
    },
  })

  const comfirmOrder = (data: addressFormData) => {
    // if (!paymentMethod) return

    // enable submit button

    console.log(data)
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutForm onSubmit={checkoutForm.handleSubmit(comfirmOrder)}>
        <CheckoutSection>
          <h2>Complete seu pedido</h2>
          <OrderAddressForm />
          <PaymentMethodSelector />
        </CheckoutSection>

        <CheckoutSection>
          <h2>Cafés selecionados</h2>
          <CheckoutSummary />
        </CheckoutSection>
      </CheckoutForm>
    </FormProvider>
  )
}
