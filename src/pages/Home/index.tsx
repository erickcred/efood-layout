import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Produto from '../../models/Produto'

import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'

const produtos: Produto[] = [
  {
    id: 1,
    image: sushi,
    tags: ['Destaque da semana', 'Japonesa'],
    title: 'Hiok Sushi',
    classification: '4.9',
    to: '/trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: trattoria,
    tags: ['Italiana'],
    title: 'La Dolce Trattoria',
    classification: '4.6',
    to: '/trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: trattoria,
    tags: ['Italiana'],
    title: 'La Dolce Trattoria',
    classification: '4.6',
    to: '/trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: trattoria,
    tags: ['Italiana'],
    title: 'La Dolce Trattoria',
    classification: '4.6',
    to: '/trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: trattoria,
    tags: ['Italiana'],
    title: 'La Dolce Trattoria',
    classification: '4.6',
    to: '/trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    image: trattoria,
    tags: ['Italiana'],
    title: 'La Dolce Trattoria',
    classification: '4.6',
    to: '/trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => {
  return (
    <>
      <Header
        home={true}
        title="Viva experiências gastronomicas no conforto de sua casa"
      />
      <ProductList produtos={produtos} />
    </>
  )
}

export default Home
