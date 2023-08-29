import { ProductList } from '../../components/ProductList'
import { IntroductionSection } from '../../components/IntroductionSection'

export function Home() {
  return (
    <>
      <IntroductionSection />
      <ProductList title="Nossos cafés" />
    </>
  )
}
