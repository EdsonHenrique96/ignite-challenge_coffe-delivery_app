import { useContext } from 'react'
import { productsData } from '../../api/products'
import { ProductCard } from '../ProductCard'
import { CoffeListContainer, CoffeListContent } from './styles'
import { CartContext } from '../../contexts/CartContext'

interface ProductListProps {
  title: string
}

export function ProductList({ title }: ProductListProps) {
  const { addItemOnCart } = useContext(CartContext)

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
