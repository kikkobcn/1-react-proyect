import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className='d-flex justify-content-around mb-5'>
        <div className="d-flex flex-column">
          <Link to="/Personas">Facebook</Link>
          <Link to="/Personas">Instagram</Link>
          <Link to="/Personas">Linked</Link>
        </div>
        <div className="d-flex flex-column">
          <Link to="/Personas">Contacto</Link>
          <Link to="/Personas">Terminos y Condiciones</Link>
          <Link to="/Personas">Seguridad</Link>
      </div>
    </footer>
  )
}
export default  Footer