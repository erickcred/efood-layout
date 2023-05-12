import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  pinkLight: '#FFEBD9',
  white: '#fff',
  whiteGray: '#FFF8F2',
  blackTransparence: 'rgba(0, 0, 0, 0.5)'
}

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${colors.whiteGray};
    /* margin: 64px 0 40px 0; */
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
`

export default GlobalStyles
