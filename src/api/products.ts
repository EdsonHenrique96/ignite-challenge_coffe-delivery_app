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
import { Product } from '../models/Product'

export const productsData: Product[] = [
  {
    id: 'a0b9976c-1e70-40bd-8d65-f45783cdbcbc',
    name: 'Expresso Tradicional',
    labels: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos modídos',
    price: 9.9,
    image: ExpressoTradicionaImg,
  },
  {
    id: 'b791afb3-0924-4734-a1fe-bd881e14880d',
    name: 'Expresso Americano',
    labels: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 7.9,
    image: ExpressoAmericanoImg,
  },
  {
    id: 'afe13716-f1f3-460e-a763-b614429b011f',
    name: 'Expresso Cremoso',
    labels: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 11,
    image: ExpressoCremosoImg,
  },
  {
    id: '09eb5d19-4f9f-48e3-bf20-18f226bfbbdb',
    name: 'Expresso Gelado',
    labels: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 12.5,
    image: ExpressoGeladoImg,
  },
  {
    id: '9c154f77-0508-4804-83f4-5c3af84d26d2',
    name: 'Café Com Leite',
    labels: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 6.5,
    image: CafeComLeiteImg,
  },
  {
    id: '717895b6-be6d-4063-bc2c-fec55fd59a40',
    name: 'Latte',
    labels: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 8,
    image: CaffeLatteImg,
  },
  {
    id: 'c00739c1-a13c-409a-bdcc-f1434d586326',
    name: 'Capuccino',
    labels: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 11.2,
    image: CapuccinoImg,
  },
  {
    id: 'aaead706-bfb2-4d8c-b25e-6bd7e00ace64',
    name: 'Macchiato',
    labels: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 7,
    image: MachiatoImg,
  },
  {
    id: '6d410472-eee4-40ee-b871-5b9b9aaad758',
    name: 'Mocaccino',
    labels: ['Especial', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 19.9,
    image: MocaccinoImg,
  },
  {
    id: '93ec55bb-2f24-4542-8d45-c27a9cfed25d',
    name: 'Chocolate Quente',
    labels: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 19.9,
    image: ChocolateQuenteImg,
  },
  {
    id: '41fd86b8-c2e2-44eb-a65a-25dbc7035d6d',
    name: 'Cubano',
    labels: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 20.9,
    image: CubanoImg,
  },
  {
    id: '41fd86b8-c2e2-44eb-a65a-25dbc7423d6d',
    name: 'Havaiano',
    labels: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 20,
    image: HavaianoImg,
  },
  {
    id: 'fe81f903-826a-497c-b147-2645f1ff3a80',
    name: 'Árabe',
    labels: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 20.4,
    image: ArabeImg,
  },
  {
    id: '345bb2e9-654d-4385-8438-bb62134b10a6',
    name: 'Irlandês',
    labels: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 19.95,
    image: IrlandesImg,
  },
]
