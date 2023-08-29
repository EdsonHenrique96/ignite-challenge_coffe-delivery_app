import { MapPin } from '@phosphor-icons/react'
import Logo from '../../assets/logo.png'
import { Cart } from '../Cart'
import { HeaderContent, LocaleContainer } from './styles'

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContent>
      <Link to="/">
        <img src={Logo} alt="logo coffee delivery" />
      </Link>

      <nav>
        <LocaleContainer>
          <MapPin weight="fill" size={22} />
          <p>Poços de Caldas, MG</p>
        </LocaleContainer>

        <Link to="/checkout">
          <Cart />
        </Link>
      </nav>
    </HeaderContent>
  )
}
