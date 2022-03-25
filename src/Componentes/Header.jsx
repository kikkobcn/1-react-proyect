import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
return (
    <header>
        <ul className='list-group list-group-horizontal'>
            <li className="list-group list-group-item"><Link to="/Facturas">Facturas</Link></li>
            <li className="list-group list-group-item"><Link to="/Clientes">Clientes</Link></li>
            <li className="list-group list-group-item"><Link to="/Productos">Productos</Link></li>
        </ul>
    </header>
)
}
export default Header