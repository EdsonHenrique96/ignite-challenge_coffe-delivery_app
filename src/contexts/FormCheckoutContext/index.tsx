import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'

interface FormCheckoutProviderProps {
  children: React.ReactNode
}

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
  paymentMethod: zod.string(),
})

type addressFormData = zod.infer<typeof addressFormValidationSchema>

export function FormCheckoutProvider({ children }: FormCheckoutProviderProps) {
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

  return <FormProvider {...checkoutForm}>{children}</FormProvider>
}
