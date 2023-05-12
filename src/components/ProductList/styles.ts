import styled from 'styled-components'
import { Description, ProductContainer } from '../Product/styles'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

type Props = {
  home?: boolean
}

export const List = styled.ul<Props>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.home ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  column-gap: 80px;
  row-gap: 48px;
  margin-top: ${(props) => (props.home ? '0px' : '146px')};

  ${ProductContainer} {
    background-color: ${(props) => !props.home && colors.pink};
    color: ${(props) => !props.home && colors.pinkLight};

    h3 {
      font-size: ${(props) => !props.home && '16px'};
      line-height: ${(props) => !props.home && '29px'};
      margin-top: ${(props) => !props.home && '-20px'};
    }

    img {
      margin: ${(props) => !props.home && '8px'};
    }
  }

  ${Description} {
    font-size: ${(props) => !props.home && '14px'};
    font-weight: ${(props) => !props.home && '400'};
    margin-top: ${(props) => !props.home && '8px'};
  }

  ${ButtonLink} {
    background-color: ${(props) => !props.home && colors.pinkLight};
    color: ${(props) => !props.home && colors.pink};
    display: ${(props) => !props.home && 'block'};
    text-align: center;
  }
`
