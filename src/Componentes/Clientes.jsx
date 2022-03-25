import React from 'react'

const URL_API="https://my-bdd-server-nlngw9uco-jviejo.vercel.app"

function getClientes() {
  return axios.get(`${URL_API}/spl?sql=selet * from customers order by customer_name`);
}

export default function Clientes() {
  const { isLoading, data } = useQuery('clientes', getClientes)
  if (isLoading) {
    return <div>Waiting For datas....</div>
  }

  return (
    <div>
    <h1>Clientess</h1>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map(cliente => (
          <tr key={cliente.customer_id}>
            <td>{cliente.customer_id}</td>
            <td>{cliente.company_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
