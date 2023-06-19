'use client'

import { useState } from "react"

export default function Pedidos() {
    const [pedidos, setPedidos] = useState<Pedido[]>([])

    // Handles the click on the "Update" button
    const handleUpdate = () => {
        // Gets pedidos from the FastAPI server
        fetch('/api/pedidos')
            .then(response => response.json())
            .then(data => setPedidos(data))
    }

    // Returns the JSX for the table rows
    const getJSX = () => {
        return pedidos.map(pedido => pedido.getJSX())
    }

    return (
        <div>
            <h1>Pedidos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Produtos</th>
                        <th>Endereço de Entrega</th>
                        <th>Valor Frete</th>
                        <th>Valor Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>{getJSX()}</tbody>
            </table>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}
