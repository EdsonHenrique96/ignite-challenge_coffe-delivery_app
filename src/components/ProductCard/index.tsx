import { ShoppingCart } from '@phosphor-icons/react'
import {
  AddToCartButton,
  CardContent,
  CardFooter,
  Label,
  LabelsContainer,
  PriceAmount,
  ProductCardContainer,
} from './styles'
import { IncrementButton } from '../IncrementButton'
import { FormartCurrency } from '../../helpers'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  labels: string[]
  description: string
  image: string
}

interface ProductCardProps {
  product: Product
  addToCart: (data: { product: Product; units: number }) => void
}

export function ProductCard({ product, addToCart }: ProductCardProps) {
  const [productUnits, setProductUnits] = useState<number>(1)

  const formattedPrice = FormartCurrency(product.price)

  return (
    <ProductCardContainer>
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

        <IncrementButton value={productUnits} updateValue={setProductUnits} />

        <AddToCartButton
          type="button"
          onClick={() => addToCart({ product, units: productUnits })}
        >
          <ShoppingCart weight="fill" size={22} />
        </AddToCartButton>
      </CardFooter>
    </ProductCardContainer>
  )
}
