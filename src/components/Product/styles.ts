import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductContainer = styled.div`
  background-color: ${colors.white};
  color: ${colors.pink};
  position: relative;
  max-width: 100%;

  img {
    margin-bottom: -5px;
    padding: 0;
  }
`

export const InfoTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Descriptions = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${colors.pink};
  padding: 8px;
`

export const DsecriptionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: flex-start;

    span {
      margin-right: 8px;
    }
  }
`

export const Title = styled.h3`
  line-height: 20px;
  padding-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 16px 0 20px 0;
`
