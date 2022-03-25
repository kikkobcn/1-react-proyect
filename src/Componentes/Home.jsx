import React from 'react'
import { Link, Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <div className="d-flex  flex-column container fullscreen">

      <header>
        <ul>
          <li><Link to="/Facturas">Facturas</Link></li>
          <li><Link to="/Clientes">Clientes</Link></li>
          <li><Link to="/Productos">Productos</Link></li>
        </ul>
      </header>

      <body className="flex-grow-1">
        <Outlet />
      </body>

      <footer>Pie</footer>
    </div>
  )
}
