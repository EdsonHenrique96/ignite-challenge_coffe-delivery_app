import { productsData } from '../../api/products'
import { FormartCurrency } from '../../helpers'
import {
  AddToCartButton,
  CardContent,
  CardFooter,
  CoffeListContainer,
  CoffeListContent,
  IncrementButton,
  Label,
  LabelsContainer,
  PriceAmount,
  ProductCard,
} from './styles'

import { ShoppingCart, Minus, Plus } from '@phosphor-icons/react'

interface ProductListProps {
  title: string
}

export function ProductList({ title }: ProductListProps) {
  return (
    <CoffeListContainer>
      <h1>{title}</h1>
      <CoffeListContent>
        {productsData.map((product) => {
          const formattedPrice = FormartCurrency(product.price)

          return (
            <ProductCard key={`product-card-${product.id}`}>
              <header>
                <img src={product.image} alt={`imagem de ${product.name}`} />

                <LabelsContainer>
                  {product.labels.map((label) => (
                    <Label key={`label-${label}-${product.id}`}>
                      {label.toUpperCase()}
                    </Label>
                  ))}
                </LabelsContainer>
              </header>

              <CardContent>
                <h2>{product.name}</h2>
                <p className="product-description">{product.description}</p>
              </CardContent>

              <CardFooter>
                <div>
                  <span>{formattedPrice.slice(0, 2)}</span>
                  <PriceAmount>{formattedPrice.slice(2)}</PriceAmount>
                </div>

                <IncrementButton>
                  <button type="button">
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button type="button">
                    <Plus size={14} weight="bold" />
                  </button>
                </IncrementButton>

                <AddToCartButton type="button">
                  <ShoppingCart weight="fill" size={22} />
                </AddToCartButton>
              </CardFooter>
            </ProductCard>
          )
        })}
      </CoffeListContent>
    </CoffeListContainer>
  )
}
