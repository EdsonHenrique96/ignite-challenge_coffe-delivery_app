import {
  IntroductionBenefits,
  IntroductionContainer,
  IntroductionDescription,
  IntroductionImageBox,
} from './styles'

import MainImage from '../../assets/main-image.png'
import { BulletIcon } from '../BulletIcon'
import { DefaultTheme } from '../../styles/themes/defaultTheme'

export function IntroductionSection() {
  return (
    <IntroductionContainer>
      <IntroductionDescription>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className="sub-title">
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <IntroductionBenefits>
          <div>
            <BulletIcon color={DefaultTheme['yellow-dark']} type="cart" />
            <p>Compra simples e segura</p>
          </div>
          <div>
            <BulletIcon color={DefaultTheme.base.text} type="box" />
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <BulletIcon color={DefaultTheme.yellow} type="timer" />
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <BulletIcon color={DefaultTheme.purple} type="coffee" />
            <p>O café chega fresquinho até você</p>
          </div>
        </IntroductionBenefits>
      </IntroductionDescription>

      <IntroductionImageBox>
        <img src={MainImage} alt="Logo grande coffe  delivery" />
      </IntroductionImageBox>
    </IntroductionContainer>
  )
}
