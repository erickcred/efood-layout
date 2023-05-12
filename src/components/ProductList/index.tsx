import Product from '../Product'

import { List } from './styles'
import Produto from '../../models/Produto'

type Props = {
  produtos: Produto[]
  home?: boolean
}

const ProductList = ({ produtos, home = true }: Props) => {
  return (
    <div className="container">
      <List home={home}>
        {produtos.map((produto) => (
          <Product
            key={produto.id}
            image={produto.image}
            tags={produto.tags}
            title={produto.title}
            classification={produto.classification}
            to={produto.to}
            description={produto.description}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductList
