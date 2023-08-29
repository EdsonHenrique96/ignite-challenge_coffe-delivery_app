import { AddressFormTitle, AddressFormTitleContainer } from './styles'

interface TitleWithIcon {
  title: string
  subTitle: string
  Icon: React.ReactNode
  iconColor: 'yellow' | 'purple'
}

export function TitleWithIcon({
  title,
  subTitle,
  Icon,
  iconColor,
}: TitleWithIcon) {
  return (
    <AddressFormTitleContainer>
      <AddressFormTitle $iconColor={iconColor}>
        {Icon}
        <h3>{title}</h3>
      </AddressFormTitle>

      <p>{subTitle}</p>
    </AddressFormTitleContainer>
  )
}
