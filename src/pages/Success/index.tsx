import {
  ContentContainer,
  ShippingInformationContainer,
  ShippingInformationLine,
  TitleContainer,
} from './styles'
import ShippingImg from '../../assets/shipping.svg'
import { DefaultTheme } from '../../styles/themes/defaultTheme'
import { BulletIcon } from '../../components/BulletIcon'
import { useLocation } from 'react-router-dom'

export function SuccessPage() {
  const location = useLocation()
  const { metodoDePagamento, rua, bairro, numero, cidade, uf } = location.state

  console.log(metodoDePagamento, rua, numero, cidade, uf)

  return (
    <>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>
      <ContentContainer>
        <ShippingInformationContainer>
          <ShippingInformationLine>
            <BulletIcon color={DefaultTheme.purple} type="map_pin" />
            <div>
              <p>
                Entrega em <span>{`${rua}, ${numero}`}</span>
              </p>
              <p>{`${bairro} - ${cidade}, ${uf}`}</p>
            </div>
          </ShippingInformationLine>
          <ShippingInformationLine>
            <BulletIcon color={DefaultTheme.yellow} type="timer" />
            <div>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </ShippingInformationLine>
          <ShippingInformationLine>
            <BulletIcon color={DefaultTheme['yellow-dark']} type="money" />
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <span>{metodoDePagamento}</span>
              </p>
            </div>
          </ShippingInformationLine>
        </ShippingInformationContainer>

        <div>
          <img src={ShippingImg} alt="" />
        </div>
      </ContentContainer>
    </>
  )
}
