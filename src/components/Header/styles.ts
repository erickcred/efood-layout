import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 384px;
  padding: 50px 0 40px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 80px;
  position: relative;
`

export const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;

  .container {
    display: grid;
    grid-template-areas: 'Link Logo Carrinho';
    justify-content: space-between;
    align-items: center;

    .Link {
      grid-area: 'Link';
    }

    img {
      grid-area: 'Logo';
    }

    .Carrinho {
      grid-area: 'Carrinho';
    }
  }
`

export const Title = styled.h2`
  text-align: center;
  width: 540px;
  margin: 0 auto;
  font-size: 36px;
  font-weight: 900;
`

export const LinkItem = styled(Link)`
  color: ${colors.pink};
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  text-decoration: none;

  &:visited {
    color: ${colors.pink};
  }
`
