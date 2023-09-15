import { productsData } from '../../api/products'
import { ProductCard } from '../ProductCard'
import { CoffeListContainer, CoffeListContent } from './styles'
import { useCart } from '../../hooks/useCart'

interface ProductListProps {
  title: string
}

export function ProductList({ title }: ProductListProps) {
  const { addItemOnCart } = useCart()

  return (
    <CoffeListContainer>
      <h1>{title}</h1>
      <CoffeListContent>
        {productsData.map((product) => {
          return (
            <ProductCard
              product={product}
              key={`product-card-${product.id}`}
              addToCart={addItemOnCart}
            />
          )
        })}
      </CoffeListContent>
    </CoffeListContainer>
  )
}
