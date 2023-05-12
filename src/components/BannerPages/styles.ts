import styled from 'styled-components'
import { Title } from '../Header/styles'
import { colors } from '../../styles'

export const BannerPagesContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 280px;
  padding: 25px 0 32px 0;
  width: 100%;

  margin-top: 64px;

  p {
    font-size: 32px;
    font-weight: 100;
    color: ${colors.white};
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`

export const TitlePages = styled(Title)`
  color: ${colors.white};
  text-align: left;
  width: 100%;
  margin-top: 156px;
`
