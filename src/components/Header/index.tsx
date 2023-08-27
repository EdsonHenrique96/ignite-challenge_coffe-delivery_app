import { MapPin } from '@phosphor-icons/react'
import Logo from '../../assets/logo.png'
import { Cart } from '../Cart'
import { HeaderContainer, HeaderContent, LocaleContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={Logo} alt="logo coffee delivery" />
        </div>

        <nav>
          <LocaleContainer>
            <MapPin weight="fill" size={22} />
            <p>Poços de Caldas, MG</p>
          </LocaleContainer>

          <Cart />
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
