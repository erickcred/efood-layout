import logo from '../../assets/images/logo.svg'
import { HeaderContainer, HeaderTop, Title, LinkItem } from './styles'
import hero from '../../assets/images/hero-home.png'
import BannerPages from '../BannerPages'

export type Props = {
  title: string
  image?: string
  linkVoltar?: string
  nameLink?: string
  home?: boolean
}

const Header = ({ title, linkVoltar: link, nameLink, home, image }: Props) => {
  return (
    <HeaderContainer style={{ backgroundImage: `url(${hero})` }}>
      <HeaderTop>
        <div className="container">
          <span>
            {!home && (
              <LinkItem className="Link" to={link as string}>
                {nameLink}
              </LinkItem>
            )}
          </span>

          <img src={logo} alt="Logo Efood" />

          <div>
            {!home && (
              <LinkItem className="Carrinho" to="/">
                0 produto(s) no carrinho
              </LinkItem>
            )}
          </div>
        </div>
      </HeaderTop>

      {home ? (
        <div className="container">
          <Title>{title}</Title>
        </div>
      ) : (
        <BannerPages image={image as string} title={title} />
      )}
    </HeaderContainer>
  )
}

export default Header
