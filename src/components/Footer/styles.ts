import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterConteiner = styled.footer`
  background-color: ${colors.pinkLight};
  color: ${colors.pink};
  margin-top: 120px;
  padding: 40px 0;

  text-align: center;

  p {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const SocialList = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 80px;
`
