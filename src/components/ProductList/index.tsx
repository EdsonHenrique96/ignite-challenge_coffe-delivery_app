import { CoffeListContainer, CoffeListContent } from './styles'

interface ProductListProps {
  title: string
}

export function ProductList({ title }: ProductListProps) {
  return (
    <CoffeListContainer>
      <h1>{title}</h1>
      <CoffeListContent>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </CoffeListContent>
    </CoffeListContainer>
  )
}
