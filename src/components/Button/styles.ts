import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${colors.pink};
  border: none;
  color: ${colors.pinkLight};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  line-height: 16px;
`
export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  border: none;
  color: ${colors.pinkLight};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  line-height: 16px;
  text-decoration: none;
`
