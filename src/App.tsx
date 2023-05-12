import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Rotas />

      <Footer />
    </BrowserRouter>
  )
}

export default App
