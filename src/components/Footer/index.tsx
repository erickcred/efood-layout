import { FooterConteiner, Logo, SocialList } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/social/instagram.svg'
import facebook from '../../assets/images/social/facebook.svg'
import twitter from '../../assets/images/social/twitter.svg'

const Footer = () => {
  return (
    <FooterConteiner>
      <div>
        <Logo src={logo} alt="" />

        <SocialList>
          <a href="#" target="_blank">
            <img src={instagram} alt="" />
          </a>
          <a href="#" target="_blank">
            <img src={facebook} alt="" />
          </a>
          <a href="#" target="_blank">
            <img src={twitter} alt="" />
          </a>
        </SocialList>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </FooterConteiner>
  )
}

export default Footer
