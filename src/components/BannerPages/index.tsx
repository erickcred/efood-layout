import { colors } from '../../styles'
import { BannerPagesContainer, TextContainer, TitlePages } from './styles'

export type Props = {
  image: string
  title: string
}

const BannerPages = ({ image, title }: Props) => {
  return (
    <BannerPagesContainer
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.blackTransparence}, ${colors.blackTransparence}), url(${image})`
      }}
    >
      <div className="container">
        <TextContainer>
          <p>Italia</p>
          <TitlePages>{title}</TitlePages>
        </TextContainer>
      </div>
    </BannerPagesContainer>
  )
}

export default BannerPages
