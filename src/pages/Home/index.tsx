import { ProductList } from '../../components/ProductList'
import { Header } from '../../components/Header'
import { IntroductionSection } from '../../components/IntroductionSection'
import { HomeContainer, HomeContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <HomeContent>
        <IntroductionSection />

        <ProductList title="Nossos cafés" />
      </HomeContent>
    </HomeContainer>
  )
}
