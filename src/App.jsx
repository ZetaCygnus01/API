import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import Menu from './componentes/Menu'
import Aleatorios from './componentes/Aleatorios'
import Listar from './componentes/Listar'
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
      <Route path="/" element={<Listar/>}/>
      <Route path="/Usuario" element={<Usuario/>}/>
      <Route path="/Aleatorios" element={<Aleatorios/>}/>
      <Route path="/capturados" element={<Capturados />} />
      <Route path="/Favoritos" element={<Favoritos/>}/>
      <Route path="/Detalle/:name" element={<Detalle />} />
      </Routes>

    </Router>
    </AppProvider>
  )
}

export default App