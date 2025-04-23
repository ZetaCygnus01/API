import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import Menu from './componentes/Menu'
import Aleatorios from './componentes/Aleatorios'
import Lista from './componentes/Lista'
import Capturados from './componentes/capturados';
import Favoritos from './componentes/Favoritos'
import Usuario from './componentes/Usuario'
import Detalle from './componentes/Detalle'

function App() {

  return (
    <AppProvider>
    <Router>

      <Menu/>

      <Routes>
      <Route path="/" element={<Lista/>}/>
      <Route path="/Usuario" element={<Usuario/>}/>
      <Route path="/Aleatorios" element={<Aleatorios/>}/>
      <Route path="/capturados" element={<Capturados />} />
      <Route path="/Detalle/:name" element={<Detalle />} />
      </Routes>

    </Router>
    </AppProvider>
  )
}

export default App