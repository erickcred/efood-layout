import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trattoria" element={<Restaurantes />} />
    </Routes>
  )
}

export default Rotas
