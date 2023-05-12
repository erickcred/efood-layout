import Button from '../Button'
import Tag from '../Tag'
import {
  ProductContainer,
  Title,
  DsecriptionTitle,
  Descriptions,
  Description,
  InfoTags
} from './styles'

import star_favorite from '../../assets/images/star_favorite.svg'

type Props = {
  image: string
  title: string
  classification?: string
  description: string
  tags: string[]
  to: string
}

const Product = ({
  image,
  classification,
  tags,
  title,
  description,
  to
}: Props) => {
  return (
    <ProductContainer>
      <img src={image} alt="" />

      <InfoTags>
        {tags.map((tag) => (
          <Tag key={title + tag}>{tag}</Tag>
        ))}
      </InfoTags>

      <Descriptions>
        <DsecriptionTitle>
          <Title>{title}</Title>
          <div>
            {classification !== '' && (
              <>
                <span>{classification}</span>
                <img src={star_favorite} alt="" />
              </>
            )}
          </div>
        </DsecriptionTitle>

        <Description>{description}</Description>
        <Button type="link" title="Saiba mais" to={to as string}>
          Saiba mais
        </Button>
      </Descriptions>
    </ProductContainer>
  )
}

export default Product
