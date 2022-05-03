import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
const URL_API = "https://my-bdd-server-nlngw9uco-jviejo.vercel.app"

function getProductos() {
  return axios.get(`${URL_API}/spl?sql=selet * from products order by product_name`);
}
{/* el simbolo ` y $ permite poner en una unica string variables con texto,  seria lo mismo que poner:   
 return axios.get(URL_API + "sql?sql=selet * from products order by product_name"); */}

export default function Productos() {

  const { isLoading, data } = useQuery('products', getProductos)
  if (isLoading) {
    return <div>Waiting For datas....</div>
  }

  return (
    <div>
      <h1>Productos actuales</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {data.data.map(producto => (
            <tr key={producto.product_id}>
              <td className='text-center'>{producto.product_id}</td>
              <td>{producto.product_name}</td>
              <td className='text-end'>{producto.unit_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

{/*{JSON.stringify(data.data[0])}       poner esto antes del <h1>Productos actuales</h1> para ver el fichero en formato json*/ }
