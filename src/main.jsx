import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Componentes/Home'
import Clientes from './Componentes/Clientes'
import Facturas from './Componentes/Facturas'
import Productos from './Componentes/Productos'
import Eth from './Componentes/Eth'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} >
      <Route path="/Facturas" element={<Facturas></Facturas>} />
      <Route path="/Clientes" element={<Clientes></Clientes>} />
      <Route path="/Productos" element={<Productos></Productos>} />
      <Route path="/eth" element={<Eth></Eth>} />
      </Route>      
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
