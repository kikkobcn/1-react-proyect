
import React from 'react'
import { useEffect, ueseState } from 'react';


/*const { ethereum } = windows;*/


export default function Eth() {

    const [cuenta, setCuenta] = React.useState(null); /*sirve para guardar datos*/

useEffect(() => {
    windows.ethereum && windows.ethereum.request({ method: 'eth_requestAccounts' }).then(i => {
        setCuenta(i[0])
        ethereum.on('accountsChanged', (i) => {
        setCuenta(i[0])
            console.log(i)
        })
    });
}, [])
    
return (
    <div>
        {
            cuenta && <div>
                <h1>{cuenta}</h1>
                </div>
    }
    
        
    </div>
)
}
