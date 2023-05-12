import Header from '../../components/Header'
import trattoria from '../../assets/images/trattoria.png'

import pizza from '../../assets/images/pizza.png'
import Produto from '../../models/Produto'
import ProductList from '../../components/ProductList'

const produtos: Produto[] = [
  {
    id: 1,
    image: pizza,
    tags: [],
    title: 'Pizza Marguerita',
    classification: '',
    to: '/trattoria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: pizza,
    tags: [],
    title: 'Pizza Marguerita',
    classification: '',
    to: '/trattoria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: pizza,
    tags: [''],
    title: 'Pizza Marguerita',
    classification: '',
    to: '/trattoria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: pizza,
    tags: [''],
    title: 'Pizza Marguerita',
    classification: '',
    to: '/trattoria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: pizza,
    tags: [''],
    title: 'Pizza Marguerita',
    classification: '',
    to: '/trattoria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: pizza,
    tags: [''],
    title: 'Pizza Marguerita',
    classification: '',
    to: '/trattoria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Restaurantes = () => {
  return (
    <>
      <Header
        linkVoltar="/"
        nameLink="Restaurantes"
        home={false}
        image={trattoria}
        title="LPizza Margueritaa"
      />

      <ProductList home={false} produtos={produtos} />
    </>
  )
}

export default Restaurantes
