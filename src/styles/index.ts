import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  pinkLight: '#FFEBD9',
  white: '#fff',
  blackTransparence: 'rgba(0, 0, 0, 0.8)'
}

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    color: ${colors.pink};
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }

`

export default GlobalStyles
