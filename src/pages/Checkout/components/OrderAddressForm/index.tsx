import { MapPinLine } from '@phosphor-icons/react'
import { AddressCard, AddressFormInput, AddressInputsContainer } from './styles'
import { TitleWithIcon } from '../TitleWithIcon'
import { useFormContext } from 'react-hook-form'

export function OrderAddressForm() {
  const { register } = useFormContext()

  return (
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
          maxLength={9}
          minLength={8}
          placeholder="CEP"
          className="item-1"
          {...register('cep', { required: true })}
        />
        <AddressFormInput
          type="text"
          placeholder="Rua"
          className="item-2"
          {...register('rua', { required: true })}
        />
        <AddressFormInput
          type="number"
          placeholder="Número"
          className="item-3"
          {...register('numero', { required: true, valueAsNumber: true })}
        />
        <AddressFormInput
          type="text"
          placeholder="Complemento"
          className="item-4"
          {...register('complemento')}
        />
        <AddressFormInput
          type="text"
          placeholder="Bairro"
          className="item-5"
          {...register('bairro', { required: true })}
        />
        <AddressFormInput
          type="text"
          placeholder="Cidade"
          className="item-6"
          {...register('cidade', { required: true })}
        />
        <AddressFormInput
          type="text"
          maxLength={2}
          minLength={2}
          placeholder="UF"
          className="item-7"
          {...register('uf', { required: true })}
        />
      </AddressInputsContainer>
    </AddressCard>
  )
}
