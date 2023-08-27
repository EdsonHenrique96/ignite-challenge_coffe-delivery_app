import {
  IntroductionBenefits,
  IntroductionContainer,
  IntroductionDescription,
  IntroductionImageBox,
} from './styles'

export function IntroductionSection() {
  return (
    <IntroductionContainer>
      <IntroductionDescription>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <IntroductionBenefits>
          <div>
            <img src="" alt="carrinho" />
            <p>Compra simples e segura</p>
          </div>
          <div>
            <img src="" alt="relogio" />
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <img src="" alt="caixa" />
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <img src="" alt="café" />
            <p>O café chega fresquinho até você</p>
          </div>
        </IntroductionBenefits>
      </IntroductionDescription>

      <IntroductionImageBox>
        <img src="" alt="Logo grande coffe  delivery" />
      </IntroductionImageBox>
    </IntroductionContainer>
  )
}
