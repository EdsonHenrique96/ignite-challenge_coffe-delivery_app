import ExpressoTradicionaImg from '../assets/expresso.png'
import ExpressoAmericanoImg from '../assets/americano.png'
import ExpressoCremosoImg from '../assets/expresso-cremoso.png'
import ExpressoGeladoImg from '../assets/cafe-gelado.png'
import CafeComLeiteImg from '../assets/cafe-com-leite.png'
import CaffeLatteImg from '../assets/latte.png'
import CapuccinoImg from '../assets/capuccino.png'
import MachiatoImg from '../assets/macchiato.png'
import MocaccinoImg from '../assets/mochaccino.png'
import ChocolateQuenteImg from '../assets/chocolate-quente.png'
import CubanoImg from '../assets/cubano.png'
import HavaianoImg from '../assets/havaiano.png'
import ArabeImg from '../assets/arabe.png'
import IrlandesImg from '../assets/irlandes.png'

export const productsData = [
  {
    name: 'Expresso Tradicional',
    labels: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos modídos',
    price: 9.9,
    image: ExpressoTradicionaImg,
  },
  {
    name: 'Expresso Americano',
    labels: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: ExpressoAmericanoImg,
  },
  {
    name: 'Expresso Cremoso',
    labels: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: ExpressoCremosoImg,
  },
  {
    name: 'Expresso Gelado',
    labels: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: ExpressoGeladoImg,
  },
  {
    name: 'Café Com Leite',
    labels: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: CafeComLeiteImg,
  },
  {
    name: 'Latte',
    labels: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: CaffeLatteImg,
  },
  {
    name: 'Capuccino',
    labels: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: CapuccinoImg,
  },
  {
    name: 'Macchiato',
    labels: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: MachiatoImg,
  },
  {
    name: 'Mocaccino',
    labels: ['Especial', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: MocaccinoImg,
  },
  {
    name: 'Chocolate Quente',
    labels: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: ChocolateQuenteImg,
  },
  {
    name: 'Cubano',
    labels: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: CubanoImg,
  },
  {
    name: 'Havaiano',
    labels: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: HavaianoImg,
  },
  {
    name: 'Árabe',
    labels: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: ArabeImg,
  },
  {
    name: 'Irlandês',
    labels: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: IrlandesImg,
  },
]
